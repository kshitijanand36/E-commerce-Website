import React from 'react'
import { Button, Image, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import products from '../products';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {

    const currProduct = products.find((p) => p._id == match.params.id)
    return (
        <>
            <Link to="/">
                <Button className='btn btn-light'>
                    Go back
                </Button>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={currProduct.image} alt={currProduct.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h2>{currProduct.name}</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating rating={currProduct.rating} numReviews={currProduct.numReviews} color='yellow'>

                            </Rating>

                        </ListGroupItem>
                        <ListGroupItem>
                            Price : ₹{currProduct.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description :  {currProduct.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price :
                            </Col>
                                <Col>
                                    ₹{currProduct.price}
                                </Col>
                            </Row>

                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status :
                            </Col>
                                <Col>
                                    {currProduct.countInStock > 0 ? "In Stock" : "Out of Stock"}

                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className=' btn-block my-3' type='button' disabled={currProduct.countInStock == 0}>
                                Add to cart
                        </Button>

                        </ListGroupItem>


                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
