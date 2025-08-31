import {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import "./gallery.css"

export default function Gallery() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const imageContext = import.meta.glob('/src/assets/examples/*.{jpg,png,webp}',
            {
                eager: true,
                import: 'default'
            });

        const loadedImages = Object.values(imageContext).map((src, index) => ({
            src: src,
            alt: `Gallery image ${index + 1}`,
        }));

        setImages(loadedImages);
    }, [])
    return (
        <div>
            <p className="text-center">ЭТО ГАЛЕРЕЯ</p>
            <div className="gallery">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            {/*<a href={img.url} target="_blank" rel="noopener noreferrer">*/}
                            <img
                                 alt=""
                                 src={img.src}/>
                            {/*</a>*/}
                        </div>
                    ))}
            </div>
        </div>
    )
}