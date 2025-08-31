import {useEffect, useRef, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";
import {useNavigate} from "react-router-dom";

export default function Gallery_M() {
    const navigate = useNavigate();
    const galleryRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("auto");
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (galleryRef.current) {
            const viewportHeight = window.innerHeight;
            setMaxHeight(`${viewportHeight * 1.5}px`); // 1.5 экрана
        }

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
        <div className="gallery-container"
             ref={galleryRef}
             style={{maxHeight}}>
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
            <div className="gallery-overlay">
                <button
                    className="show-more-button"
                    onClick={() => navigate('/examples')}
                >
                    {"Посмотреть ещё >>>"}
                </button>
            </div>
        </div>
    )
}