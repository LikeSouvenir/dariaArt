import {useRef, useState} from "react";
import {Collapse} from "@mui/material";
import Gallery_M from "../gallery_masonry/Gallery_M.jsx";
import Container from "react-bootstrap/Container";

export default function SortedGallery({name, description, path}) {
    // при открытие запоминать где находиться экран, и при закрытие возвращатся туда же
    const [open, setOpen] = useState(false);
    const startPlace = useRef(null);

    function handleClose() {
        setOpen(!open);
        startPlace.current.focus();
    }

    return (
        <>
            <div className="btn-background">
                <btn
                    className="sorted-gallery_btn sorted-gallery_top_btn"
                    onClick={handleClose}
                    aria-expanded={open}
                    ref={startPlace}
                >
                    <div className="is-double-column sorted-gallery_fon">
                        <Container className="text-start">
                            {name}
                            <p>{description}</p>
                        </Container>
                        {/*download and view icons ////////////////////////////*/}
                        {/*<Container className="text-end h-50">*/}
                        {/*    <img className="h-25 sorted-gallery_logo"*/}
                        {/*         src='./src/assets/logo/icons8-вставка-64.png'/>*/}
                        {/*карусель*/}
                        {/*    <img className="h-25 sorted-gallery_logo"*/}
                        {/*         src='./src/assets/logo/icons8-открытая-книга-48.png'/>*/}
                        {/*    72*/}
                        {/*</Container>*/}
                    </div>
                </btn>
                <Collapse in={open}>
                    <div className="pt-3 px-2">
                        <Gallery_M path={path} load={open}/>
                    </div>
                </Collapse>

                <btn
                    className="sorted-gallery_btn"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    style={{cursor: open ? 'default' : 'pointer'}}
                >
                    <div className="text-center usefull-links">
                        <div className={open ? "arrow-open" : "arrow"}>{">"}</div>
                    </div>
                </btn>
            </div>
        </>
    )
}