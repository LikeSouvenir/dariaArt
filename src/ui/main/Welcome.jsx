import Header from "../header/Header";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
import Gallery from "./gallery/Gallery.jsx";
import Gallery_M from "./gallery_masonry/Gallery_M.jsx";

export default function Welcome() {
    return (
        <>
            <header>
                <Header/>
            </header>

            <div className="is-double-column">
                <Container className="text-center px-5">
                    <h2 className="title fw-bold fs-1">Дарья Бургонова</h2>
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
                </Container>
                <Container className="text-center">
                    <Image
                        className="main-img"
                        width="100%"
                        height="100%"
                        src="./src/assets/daria_best_heirstyle.jpg"
                    />
                </Container>
            </div>
            <Gallery_M/>
            <h3 className="text-center pt-5">Контакты</h3>
            <div className="is-double-column pt-5">
                <Container className="text-center">
                    <Image
                        className="main-img"
                        width="100%"
                        height="100%"
                        src="./src/assets/daria_best_heirstyle.jpg"
                    />
                </Container>
                <Container className="text-center px-5">
                    <h2 className="title fw-bold fs-1">Дарья Бургонова</h2>
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
                </Container>
            </div>
        </>
    )
}