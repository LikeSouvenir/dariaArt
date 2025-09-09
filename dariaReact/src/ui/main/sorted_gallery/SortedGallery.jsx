import {useEffect, useState} from "react";
import {Collapse} from "@mui/material";
import Gallery_M from "../gallery_masonry/Gallery_M.jsx";
import Container from "react-bootstrap/Container";

export default function SortedGallery({name, description, path}) {
    // при открытие запоминать где находиться экран, и при закрытие возвращатся туда же
    const [open, setOpen] = useState(false);

    useEffect(() => {

    }, [open]);
    return (
        <btn
            className="sorted-gallery_btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
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
            <div className="text-center usefull-links">
                <Collapse in={open}>
                    <div className="pt-3 px-2">
                        <Gallery_M path={path}/>
                    </div>
                </Collapse>
                <div className="arrow">{">"}<i className="flaticon-down-arrow"></i></div>
            </div>
        </btn>
    )
}

// const [metaInfo, setMetaInfo] = useState([]);
// const [loading, setLoading] = useState(false);

// const loadMetaInf = async (folderPath) => {
// if (folderPath) {
//     setLoading(true);
// } else return;
// try {
//     setMetaInfo(await getPaths());
// } catch (e) {
//     console.log("SORTED GALLERY - error")
//     console.log(e)
// }
// }