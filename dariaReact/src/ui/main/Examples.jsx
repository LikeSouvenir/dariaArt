import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Gallery_M from "./gallery_masonry/Gallery_M.jsx";
import {Button, Tab, Tabs} from "react-bootstrap";
import SortedGallery from "./sorted_gallery/SortedGallery.jsx";
import {useContext, useState} from "react";
import {AppContext} from "../../core/Context.jsx";


export default function Examples() {
    const {getWorks} = useContext(AppContext);
    const [metaInfo, setMetaInfo] = useState([]);

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
            <Header/>

            <div className="container d-grid">
                <Button onClick={loadWorks} variant="outline-info" size="lg">GET WORKS</Button>
                <Button onClick={() => console.log(metaInfo)} variant="outline-info" size="lg">GET metaInfo</Button>
            </div>

            <Tabs
                defaultActiveKey="works"
                id="uncontrolled-tab-example"
                className="mb-3" fill
            >
                <Tab eventKey="lenta" title="Лента">
                    {/*<Gallery_M path={'/src/assets/examples/*.{jpg,png,webp}'}/>*/}
                </Tab>
                <Tab eventKey="works" title="Работы" onClick={loadWorks}>
                    <div className="gallery-item">
                        <div className="////////////////////////////////////////////////////////">
                            {metaInfo.length !== 0 && metaInfo.map((item) => (
                                <div key={item.id}>
                                    <SortedGallery
                                        name={item.name}
                                        description={item.description}
                                        path={item.path}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Tab>
            </Tabs>

            <Footer/>
        </>
    )
}