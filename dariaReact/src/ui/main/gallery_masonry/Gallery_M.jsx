import {useEffect, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";

export default function Gallery_M() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const imageContext = import.meta.glob('/src/assets/examples/*.{jpg,png,webp}', {
            eager: true,
            import: 'default'
        });
        const loadedImages = Object.values(imageContext).map((src, index) => ({
            src: src,
            alt: `Gallery image ${index + 1}`,
        }));

        setImages(loadedImages);
    }, [])

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
            {images.map((img, index) => (
                <div key={index} className="gallery-item">
                    {/*<a href={img.url} target="_blank" rel="noopener noreferrer">*/}
                    <img
                        alt=""
                        src={img.src}/>
                    {/*</a>*/}
                </div>
            ))}
        </Masonry>
    )
}