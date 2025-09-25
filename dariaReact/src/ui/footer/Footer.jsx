import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Container} from '@mui/material';
import {useContext, useState} from "react";
import {AppContext} from "../../core/Context.jsx";
import Messengers from "../Messengers.jsx";


export default function Footer() {
    const navigate = useNavigate();
    const {getExamples} = useContext(AppContext);
    const [message, setMessage] = useState("");

    async function sendExamples(e) {
        e.preventDefault();

        const val = await getExamples(e.target[0].value)
        setMessage(val ? "Портфолио отправлено" : "Ошибка, пиьсмо не отправлено");
    }

    return (
        <>
            <div className="footer_img">
                <div className="is-double-column pt-5 bg-white">
                    {/*<Button variant="info mx-2" onClick={() => console.log(check())}>Получить</Button>*/}
                    <Container className="text-center">
                        <Navbar.Brand onClick={() => navigate("/")}>𝘿𝙖𝙧𝙞𝙖 𝘼𝙧𝙩</Navbar.Brand>
                        <Nav className="justify-content-center flex-grow-1 pt-2">
                            <Messengers/>
                        </Nav>
                    </Container>
                    <Container className="text-center">
                        <Form onSubmit={sendExamples}>
                            <Form.Group className="mb-3 w-50" controlId="sendToEmail">
                                <p className="text-lg-start">Получить портфолио</p>
                                <div className="is-double-column">
                                    <Form.Control type="email" placeholder="example@mail.ru"/>
                                    <Button variant="info mx-2" type="submit">Получить</Button>
                                </div>
                                <div className="text-start">
                                    {message ? <Form.Text>{message}</Form.Text> : null}
                                </div>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    )
}