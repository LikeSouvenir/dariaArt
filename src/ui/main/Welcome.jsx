import Header from "../header/Header";
import Container from "react-bootstrap/Container";
import Gallery_M from "./gallery_masonry/Gallery_M.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Welcome() {

    return (
        <>
            <Header/>
            <div className="is-double-column">
                <Container className="text-center">
                    <div className="container w-75">
                        <h2 className="title fw-bold fs-1 text-muted">Дарья Вишнякова</h2>
                        <p>
                            Добро пожаловать! Меня зовут Дарья, я художница,
                            глубоко вдохновлённая природой и искусством повествования.
                            В своих картинах я оживляю персонажей, запечатлевая красоту
                            повседневного и раскрывая необычное в простых жестах и выражениях.
                        </p>
                        <p>
                            Мои работы стремятся к взаимопониманию и размышлению, предлагая
                            зрителям взглянуть на мир и друг на друга по-новому.
                            Присоединяйтесь ко мне в этом творческом путешествии, где
                            мы исследуем гармонию искусства и природы, открывая
                            новые перспективы и истории.
                        </p>
                    </div>
                </Container>
                <Container className="text-center">
                    <img
                        className="footer_reveal-1"
                        width="100%"
                        height="100%"
                        src="./src/assets/daria_best_heirstyle.jpg"
                    />
                </Container>
            </div>

            <h3 className="fw-medium fs-2 text-center p-5">Примеры работ</h3>
            <Gallery_M/>

            <Footer/>
        </>
    )
}