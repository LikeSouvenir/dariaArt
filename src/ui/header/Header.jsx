import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <Navbar sticky='top'>
                <Container fluid>
                    <img
                        src="/src/assets/logo.png"
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                        alt="Дарья Вишнякова logo"
                    />
                    <Navbar.Brand href="#about">𝘿𝙖𝙧𝙞𝙖 𝘽𝙪𝙧𝙜𝙤𝙣𝙤𝙫𝙖 𝘼𝙧𝙩</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Link href="#about">Обо мне</Nav.Link>
                            <Nav.Link href="#examples">Работы</Nav.Link>
                            <Nav.Link href="#contacts">Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
//