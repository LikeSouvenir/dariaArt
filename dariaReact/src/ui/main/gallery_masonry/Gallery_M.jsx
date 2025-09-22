import {useContext, useEffect, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";
import {AppContext} from "../../../core/Context.jsx";
import {Button} from "react-bootstrap";

export default function Gallery_M({path, load}) {
    const {getImages} = useContext(AppContext);
    const [imgMetInf, setImgMetaInf] = useState([]);

    useEffect(() => {
        async function loadImg() {
            if (!load) return;
            try {
                setImgMetaInf(await getImages(path));
            } catch (e) {
                console.log('Ошибка получения мета-информации:', e);
                setImgMetaInf([]);
            }
        }
        loadImg();
    }, [load, path, getImages]);


    const breakpointColumnsObj = {
        default: 4, // 4 колонки по умолчанию
        1500: 3,   // 3 колонки на экранах ≤ 1500px
        1100: 2,   // 2 колонки на экранах ≤ 1100px
        700: 1      // 1 колонка на экранах ≤ 700px
    };
    return (
        <>
            <Masonry breakpointCols={breakpointColumnsObj}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
            >
                {/*<div className="container d-grid">*/}
                {/*    /!*<Button onClick={() => loadImg()} variant="outline-info" size="lg">GET WORKS</Button>*!/*/}
                {/*    <Button onClick={() => console.log(imgMetInf)} variant="outline-info" size="lg">GET WORKS*/}
                {/*        LOG</Button>*/}
                {/*</div>*/}
                {imgMetInf.map((img, index) => {
                    const imagePath = `${img.img_path}`; // или другое расширение
                    return (
                        <div key={index} className="gallery-item">
                            <img
                                loading="lazy"
                                alt={`Image ${img.id}`}
                                src={imagePath}
                                // onError={(e) => {
                                //     e.target.src = '/placeholder.jpg';
                                // }}
                            />
                        </div>
                    );
                })}
            </Masonry>
        </>
    )
}