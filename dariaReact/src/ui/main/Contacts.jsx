import {Form, InputGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export default function Contacts() {
    function sendEmailQuestion(e) {
        e.preventDefault();
        console.log("Sending email question...");
    }
    return (
        <>
            <Header/>
            <h3 className="fw-medium fs-2 text-center pt-5">Контакты</h3>
            <div className="is-double-column pt-5">
                <Container className="text-center">
                    <img
                        className="main-img"
                        width="100%"
                        height="100%"
                        src="./src/assets/daria_with_queen.jpg"
                    />
                </Container>
                <Container className="text-center px-5">
                    <Form onSubmit={sendEmailQuestion}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className="text-lg-start">Почта</p>
                            <Form.Control type="email" placeholder="example@mail.ru"/>
                        </Form.Group>
                        <p className="text-lg-start">Сообщение</p>
                        <InputGroup>
                            <Form.Control as="textarea"/>
                        </InputGroup>
                    </Form>
                    <div className="container text-center pt-4">
                        <div className="row align-items-start">
                            <img className="col" style={{"max-height": '30px'}} height="100%"
                                 src='./src/assets/logo/instagram.svg'/>
                            <img className="col" style={{"max-height": '30px'}} height="100%"
                                 src='./src/assets/logo/icons8-vk.svg'/>
                            <img className="col" style={{"max-height": '30px'}} height="100%"
                                 src='./src/assets/logo/telegram.svg'/>
                            <img className="col" style={{"max-height": '30px'}} height="100%"
                                 src='./src/assets/logo/whatsapp.svg'/>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </>
    )
}