import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar sticky="top" className="fw-medium bg-white">
                <Container fluid>
                    <img
                        src="/src/assets/logo.png"
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                        alt="Дарья Вишнякова logo"
                    />
                    <Navbar.Brand onClick={() => navigate("/")}>𝘿𝙖𝙧𝙞𝙖 𝘽𝙪𝙧𝙜𝙤𝙣𝙤𝙫𝙖 𝘼𝙧𝙩</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="bg-body-tertiar">
                        <Nav className="justify-content-end flex-grow-2">
                            <Nav.Link onClick={() => navigate("/about")}>Обо мне</Nav.Link>
                            <Nav.Link onClick={() => navigate("/examples")}>Портфолео</Nav.Link>
                            <Nav.Link onClick={() => navigate("/contacts")}>Контакты</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end flex-grow-1">
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/instagram.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/icons8-vk.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/telegram.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/whatsapp.svg'/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
//