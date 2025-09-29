import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Gallery_M from "./gallery_masonry/Gallery_M.jsx";
import {Button, Tab, Tabs} from "react-bootstrap";
import SortedGallery from "./sorted_gallery/SortedGallery.jsx";
import {useContext, useState} from "react";
import {AppContext} from "../../core/Context.jsx";
import backdrop from "bootstrap/js/src/util/backdrop.js";


export default function Examples() {
    const {getWorks} = useContext(AppContext);
    const [metaInfo, setMetaInfo] = useState([]);
    const [isLentaOpen, setIsLentaOpen] = useState(true);

    // загрузка при необходимости
    async function loadWorks() {
        try {
            setMetaInfo(await getWorks());
        } catch (e) {
            console.log("SORTED GALLERY - error")
            console.log(e)
        }
    }

    return (
        <>
            {/*<Navbar sticky="top" className="fw-medium bg-white">*/}
            <div className="sticky-top">
            <Header/>

            {/*<div className="container d-grid">*/}
            {/*    <Button onClick={loadWorks} variant="outline-info" size="lg">GET WORKS</Button>*/}
            {/*</div>*/}

            </div>
            <Tabs
                defaultActiveKey="lenta"
                onSelect={(key) => key === "works" ? loadWorks() : setIsLentaOpen(!isLentaOpen)}
                id="uncontrolled-tab-example"
                className="mb-3" fill
            >
                <Tab eventKey="lenta" title="Лента" >
                    <Gallery_M path={'all'} load={isLentaOpen}/>
                </Tab>
                <Tab eventKey="works" title="Список работ">
                    {metaInfo.length !== 0 && metaInfo.map((item) => (
                        <div key={item.id}>
                            <SortedGallery
                                name={item.name}
                                description={item.description}
                                path={item.path}
                            />
                        </div>
                    ))}
                </Tab>
            </Tabs>

            <Footer/>
        </>
    )
}