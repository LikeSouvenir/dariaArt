import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../core/Context.jsx";
import Messengers from "../Messengers.jsx";

export default function Header() {
    const navigate = useNavigate();
    const [logoPath, setLogoPath] = useState("/src/assets/logo_before.png")
    const {isLogoFocused, setIsLogoFocused} = useContext(AppContext);
    useEffect(() => {
        setLogoPath(isLogoFocused ? "/src/assets/logo_before.png" : "/src/assets/logo_after.png")
    }, [isLogoFocused])

    const menuValues = [
        { navPath: "/", name: 'Главная', classNameActive: "rgb(214, 134, 0)" },
        { navPath: "/about", name: 'Обо мне', classNameActive: "rgb(214, 134, 143)" },
        { navPath: "/examples", name: 'Портфолио', classNameActive: "rgb(124, 191, 143)" },
        { navPath: "/contacts", name: 'Контакты', classNameActive: "rgb(124, 191, 220)" },
    ]
    const activeIndex = menuValues.findIndex(item => item.navPath === location.pathname);

    return (
        <>
            <Navbar sticky="top" className="fw-medium bg-white">
                <Container fluid>
                    <img
                        onMouseEnter={() => setIsLogoFocused(!isLogoFocused)}
                        src={logoPath}
                        width="120"
                        height="120"
                        className="d-inline-block align-top"
                        alt="Дарья Вишнякова logo"
                    />
                    {/*<Navbar.Brand onClick={() => navigate("/")}>𝘿𝙖𝙧𝙞𝙖 𝘼𝙧𝙩</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                    <Navbar.Collapse id="bg-body-tertiar" className=" mx-5">
                        <Nav className="justify-content-end flex-grow-2">
                            {menuValues.map((item, index) => (
                                <Nav.Link
                                    onClick={() => navigate(item.navPath)}
                                    // style={{ color: "#0d6efd" }}
                                    style={activeIndex === index ? { color: item.classNameActive } : {color: "rgb(100,100,100)"}}
                                    // className={activeIndex === index ? item.classNameActive : "text-muted"}
                                    key={index}>
                                    {item.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Nav className="justify-content-end flex-grow-1">
                            <Messengers/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
//