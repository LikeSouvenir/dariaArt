import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Gallery_M from "./gallery_masonry/Gallery_M.jsx";
import {Tab, Tabs} from "react-bootstrap";
import SortedGallery from "./sorted_gallery/SortedGallery.jsx";

export default function Examples() {

    return (
        <>
            <Header/>

            <Tabs
                defaultActiveKey="works"
                id="uncontrolled-tab-example"
                className="mb-3" fill
            >
                <Tab eventKey="lenta" title="Лента">
                    <Gallery_M/>
                </Tab>
                <Tab eventKey="works" title="Работы">
                    <SortedGallery/>
                </Tab>
            </Tabs>

            <Footer/>
        </>
    )
}