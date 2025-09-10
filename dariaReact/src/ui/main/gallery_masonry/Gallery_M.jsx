import {useContext, useEffect, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";
import {AppContext} from "../../../core/Context.jsx";
import {Button} from "react-bootstrap";

export default function Gallery_M({path, load}) {
    const {getImages} = useContext(AppContext);
    const [imgMetInf, setImgMetaInf] = useState([]);
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     if (!imgMetInf || imgMetInf.length === 0) return;
    //     const loadImageFiles = async () => {
    //         try {
    //             const loadedImages = await Promise.all(
    //                 imgMetInf.map(async (imgObj) => {
    //                     try {
    //                         // Пробуем загрузить разные форматы
    //                         const formats = ['jpg', 'png', 'webp'];
    //                         let imageSrc = null;
    //
    //                         for (const format of formats) {
    //                             try {
    //                                 const path = `${imgObj.img_path}.${format}`;
    //                                 // Для Vite нужно использовать import.meta.glob или динамический импорт
    //                                 const module = await import(/* @vite-ignore */ `${path}?url`);
    //                                 imageSrc = module.default;
    //                                 break;
    //                             } catch (e) {
    //                                 console.log(`Не удалось загрузить ${imgObj.img_path}.${format}`);
    //                                 continue;
    //                             }
    //                         }
    //                         return {
    //                             src: imageSrc || '/placeholder.jpg', // fallback изображение
    //                             alt: `Gallery image ${imgObj.id}`,
    //                             id: imgObj.id
    //                         };
    //                     } catch (error) {
    //                         console.error('Ошибка загрузки изображения:', error);
    //                         return {
    //                             src: '/placeholder.jpg',
    //                             alt: 'Не удалось загрузить изображение',
    //                             id: imgObj.id
    //                         };
    //                     }
    //                 }));
    //             setImages(loadedImages);
    //         } catch (error) {
    //             console.error('Ошибка загрузки изображений:', error);
    //         }
    //     }
    //     loadImageFiles();
    // }, [imgMetInf]);

    const loadImg = async () => {
        if (!load) return;
        try {
            setImgMetaInf(await getImages(path));
        } catch (e) {
            console.log('Ошибка получения мета-информации:', e);
        }
    }

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
                <div className="container d-grid">
                    <Button onClick={() => loadImg()} variant="outline-info" size="lg">GET WORKS</Button>
                    <Button onClick={() => console.log(imgMetInf)} variant="outline-info" size="lg">GET WORKS
                        LOG</Button>
                </div>
                {/*{images.map((img, index) => (*/}
                {/*    <div key={index} className="gallery-item">*/}
                {/*        /!*<a href={img.url} target="_blank" rel="noopener noreferrer">*!/*/}
                {/*        /!*{console.log(img.img_path + ".jpg")}*!/*/}
                {/*        <img*/}
                {/*            loading="lazy"*/}
                {/*            alt={img.alt}*/}
                {/*            src={img.src}*/}
                {/*            // onError={(e) => {*/}
                {/*            //     e.target.src = '/placeholder.jpg';*/}
                {/*            //     e.target.alt = 'Не удалось загрузить изображение';*/}
                {/*            // }}*/}
                {/*        />*/}
                {/*        /!*</a>*!/*/}
                {/*    </div>*/}
                {/*))}*/}
                {imgMetInf.map((img, index) => {
                    const imagePath = `${img.img_path}.jpg`; // или другое расширение
                    {console.log(imagePath)}
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