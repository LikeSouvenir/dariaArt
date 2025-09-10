import {Button, Form, InputGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import {useContext, useState} from "react";
import {AppContext} from "../../core/Context.jsx";

export default function Contacts() {
    const {sendMessage} = useContext(AppContext);
    const [message, setMessage] = useState("");

    async function sendEmailQuestion(e) {
        e.preventDefault();

        const val = await sendMessage(e.target[0].value, e.target[1].value);
        setMessage(val ? "Успешно отправлено" : "Ошибка, пиьсмо не отправлено");
    }
    return (
        <>
            <Header/>
            <h3 className="fw-medium fs-2 text-center pt-5">Контакты</h3>
            <div className="is-double-column pt-5">
                <Container className="text-center">
                    <img
                        className="main-img"
                        width="80%"
                        height="70%"
                        src="./src/assets/daria_best_heirstyle.jpg"
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
                        <div className="d-grid">
                            <Button variant="info mt-2" size="lg" type="submit">Получить</Button>
                        </div>
                        <div className="text-start">
                            {message ? <Form.Text>{message}</Form.Text> : null}
                        </div>
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