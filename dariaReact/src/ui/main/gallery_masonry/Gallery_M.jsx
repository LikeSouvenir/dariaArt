import {useContext, useEffect, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";
import {AppContext} from "../../../core/Context.jsx";
import {Button} from "react-bootstrap";

export default function Gallery_M({path}) {
    const {getPaths} = useContext(AppContext);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!path)
            return;
        console.log(`/backend/img/${path}/*.{jpg,png,webp}`)
        // const imageContext =
        //     import.meta.glob(`/backend/img/${path}/*.{jpg,png,webp}`.toString(), {
        //     eager: true,
        //     import: 'default'
        // });
        // const loadedImages = Object.values(imageContext).map((src, index) => ({
        //     src: src,
        //     alt: `Gallery image ${index + 1}`,
        // }));
        //
        // setImages(loadedImages);
    }, [])///////////////////////////////////////////////////////////////

    const loadImg = async (folderPath) => {
        if (folderPath) {
            setLoading(true);
        }
        else return;
        try {
            setImages(await getPaths());
        } catch (e) {
        console.log(e)
        }
    }

    const breakpointColumnsObj = {
        default: 4, // 4 колонки по умолчанию
        1500: 3,   // 3 колонки на экранах ≤ 1500px
        1100: 2,   // 2 колонки на экранах ≤ 1100px
        700: 1      // 1 колонка на экранах ≤ 700px
    };
    return (
        <Masonry breakpointCols={breakpointColumnsObj}
                 className="my-masonry-grid"
                 columnClassName="my-masonry-grid_column"
        >
            <div className="container d-grid">
                <Button onClick={() => console.log(images)} variant="outline-info" size="lg">GET WORKS</Button>
            </div>
            {/*{images.map((img, index) => (*/}
            {/*    <div key={index} className="gallery-item">*/}
            {/*        /!*<a href={img.url} target="_blank" rel="noopener noreferrer">*!/*/}
            {/*        <img*/}
            {/*            alt=""*/}
            {/*            src={img.src}/>*/}
            {/*        /!*</a>*!/*/}
            {/*    </div>*/}
            {/*))}*/}
        </Masonry>
    )
}