import {useState} from "react";
import {Collapse} from "@mui/material";
import Gallery_M from "../gallery_masonry/Gallery_M.jsx";
import Container from "react-bootstrap/Container";

export default function SortedGallery() {
    const [open, setOpen] = useState(false);
    const authors = ["А.С. Пушкин", "Д.Г. Лондон"];
    const names = ["Евгений Онегин", "Сердца трех"];

    function handleCarousel() {
        console.log("handleCarousel");
    }

    function getTEST() {

        // при открытие запоминать где находиться экран, и при закрытие возвращатся туда же
        return (
            <>
                <div className="////////////////////////////////////////////////////////">
                    <btn
                        className="sorted-gallery_btn"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        <div className="is-double-column sorted-gallery_fon">
                            <Container className="text-start">
                                {authors[0]} - {names[0]}
                            </Container>
                            <Container className="text-end h-50">
                                <img className="h-25 sorted-gallery_logo"
                                     src='./src/assets/logo/icons8-вставка-64.png'/>
                                <img className="h-25 sorted-gallery_logo"
                                     src='./src/assets/logo/icons8-открытая-книга-48.png'/>
                                72
                            </Container>
                        </div>
                        <div className="text-center usefull-links">
                            <Collapse in={open}>
                                <div className="pt-3 px-2">
                                    <Gallery_M/>
                                </div>
                            </Collapse>
                            <div className="arrow">{">"}<i className="flaticon-down-arrow"></i></div>
                        </div>
                    </btn>
                </div>
            </>
        );
    }

    //карусель
    return (
        <>
            {getTEST()}
        </>
    )
}