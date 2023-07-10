import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Card, Table, Form, Button, Col, Container } from 'react-bootstrap'
import './AddBook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusSquare, faSave } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const StoreUpdate = () => {

    let history = useHistory();
    const { id } = useParams();
    alert(id);
    const [book, setBook] = useState({

        title: "",
        author: "",
        isbnNumber: "",
        price: "",
        language: ""
    })
    const { title, author, isbnNumber, price, language } = book;

    const changeSubmit = async e => {
        e.preventDefault();
        await axios.put('http://localhost:3006/books/${id}', book);
        history.push("/storeList");
    }

    useEffect(() => {
        loadBook();
    }, []);

    const loadBook = async () => {
        const result = await axios.get('http://localhost:3006/books/${id}');
        setBook(result.data);
    }
    const changeTitle = e => {
        setBook({ title: e.target.value });
    }
    const changeAuthor = e => {
        setBook({ author: e.target.value });
    }
    const changeisbnNumber = e => {
        setBook({ isbnNumber: e.target.value });
    }
    const changePrice = e => {
        setBook({ price: e.target.value });
    }
    const changeLanguage = e => {
        setBook({ language: e.target.value });
    }
    return (
        <div>
            {/*NavBar*/}

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/chart">Мой сайт книг</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="float-right">
                        <Nav.Item><Nav.Link href="/">Главная страница</Nav.Link></Nav.Item>
                        <Nav className="justify-content-end">
                            <Nav.Item><Nav.Link href="/addBook">Добавить</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/storeUpdate">обновить</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/storeDelete">Удалить</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/storeList">Список</Nav.Link></Nav.Item>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* List */}
            <Card className="border border-light bg-light text-dark">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Добавить новую книгу</Card.Header>
                <Form id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" name="title" className="bg-dark text-white" placeholder="Enter Book Titel"
                                    value={title} onChange={changeTitle} required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Автор</Form.Label>
                                <Form.Control type="text" name="author" className="bg-dark text-white" placeholder="Enter Book Author"
                                    value={author} onChange={changeAuthor} required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Номер</Form.Label>
                                <Form.Control type="text" name="isbnNumber" className="bg-dark text-white" placeholder="Enter Book ISBN Number"
                                    value={isbnNumber} onChange={changeisbnNumber} required
                                />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Цена</Form.Label>
                                <Form.Control type="text" name="price" className="bg-dark text-white" placeholder="Enter Book Price"
                                    value={price} onChange={changePrice} required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Язык</Form.Label>
                                <Form.Control type="text" name="language" className="bg-dark text-white" placeholder="Enter Book Language"
                                    value={language} onChange={changeLanguage} required
                                />
                            </Form.Group>

                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "right" }}>
                        <Button variant="primary" type="submit" onSubmit={changeSubmit}><FontAwesomeIcon icon={faSave} />  Update</Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    )
}
export default StoreUpdate;