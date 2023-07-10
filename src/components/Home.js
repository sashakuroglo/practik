import React, { Component } from 'react';
import './Home.css';
import { Carousel, Card, CardGroup, Nav, Navbar, Container, Col } from 'react-bootstrap'
import img1 from '../Images/store1.jpg'
import img2 from '../Images/store2.jpg'
import img3 from '../Images/store3.jpg'
import img4 from '../Images/vision.jpg'
import img5 from '../Images/team.jpg'
import img6 from '../Images/online.png'
import img7 from '../Images/store4.jpg'

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand >Книги</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="float-right">
                            <Nav.Item><Nav.Link href="/">Главная страница</Nav.Link></Nav.Item>
                            <Nav className="justify-content-end">
                                <Nav.Item><Nav.Link href="/login">Вход</Nav.Link></Nav.Item>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="First slide" />
                        <Carousel.Caption>
                            <br />
                            <h3>Мой сайт о книгах</h3>
                            <p>Лучшее со мной было это написание сайта о книгах.Всех рад здесь видеть</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />

                        <Carousel.Caption>
                            <h3>Сайт о книгах</h3>
                            <p>Если вы захотите приобрести книги мы находимся в городе Одеса на улице Багрицкого</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <br />
                <div class="tcontainer">
                    <div class="text-center">
                        <h1>Наши любимые книги вы найдете здесь</h1>
                    </div>
                </div>
                <br />
                <CardGroup>
                    <Card border="light " className="text-center">
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title >О нас</Card.Title>
                            <Card.Text>
                                Мы быстроразвивающая молодая команда лучших людей которые работают для вас 24 на 7. Мы очень любим наших поситителей
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card border="light" className="text-center">
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Команда всезнающих</Card.Title>
                            <Card.Text>
                                Если тебе нужно найти какую нибудь книгу , то ообращайся к нам , мы с радостью тебе ее найдем . Потому что мы лучше всех {' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card border="light" className="text-center">
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>Наш магазин</Card.Title>
                            <Card.Text>
                                Магазин с практически со всеми книгами находится на ул. Багрицкого . Вы его сразу заметите , он огромный.Если будут какие-то вопросы,обращайтесь по номеру +38(048)-777-77-77
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                </CardGroup>


            </div>
        )
    }
}

export default Home;