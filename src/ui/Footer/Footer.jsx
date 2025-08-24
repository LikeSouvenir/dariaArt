import {useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Container} from '@mui/material';


export default function Footer() {
    const navigate = useNavigate();


    function sendExamples(e) {
        e.preventDefault();
        console.log("sendExamples");
    }

    return (
        <>
            <div className="footer_img">
                <div className="is-double-column pt-5 bg-white">
                    <Container className="text-center">
                        <Navbar.Brand onClick={() => navigate("/")}>𝘿𝙖𝙧𝙞𝙖 𝘼𝙧𝙩</Navbar.Brand>
                        <Nav className="justify-content-center flex-grow-1 pt-2">
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/instagram.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/icons8-vk.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/telegram.svg'/>
                            <img className="p-lg-2" style={{"height": '50px'}} height="100%"
                                 src='./src/assets/logo/whatsapp.svg'/>
                        </Nav>
                    </Container>
                    <Container className="text-center">
                        <Form onSubmit={sendExamples}>
                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <p className="text-lg-start">Получить портфолео</p>
                                <Form.Control type="email" placeholder="example@mail.ru"/>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    )
}