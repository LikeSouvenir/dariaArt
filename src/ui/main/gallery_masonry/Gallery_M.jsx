import {useEffect, useRef, useState} from "react";
import "./gallery_m.css"
import Masonry from "react-masonry-css";

export default function Gallery_M() {
    const [showAll, setShowAll] = useState(false);
    const galleryRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("auto");
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (showAll || !galleryRef.current) return;
        const viewportHeight = window.innerHeight;
        setMaxHeight(`${viewportHeight * 1.5}px`); // 1.5 экрана
    }, [showAll]);
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
        <div>
            <h3 className="fw-medium fs-2 text-center p-5">Подборка работ</h3>
            <div className="gallery-container"
                 ref={galleryRef}
                 style={{maxHeight: !showAll ? maxHeight : "none"}}>
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
                {!showAll && (
                    <div className="gallery-overlay">
                        <button
                            className="show-more-button"
                            onClick={() => setShowAll(true)}
                        >
                            Показать ещё
                        </button>
                    </div>
                )}
            </div>

            {/*/!* Следующий блок (например, текст или другая секция) *!/*/}
            {/*<div className="next-block">*/}
            {/*    <h2>Следующий раздел</h2>*/}
            {/*    <p>Здесь может быть описание или другая информация.</p>*/}
            {/*</div>*/}
        </div>
    )
}