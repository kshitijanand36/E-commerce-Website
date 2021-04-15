import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';



const Product = ({ product }) => {
    return (
        <Card className="p-3 my-3 rounded">
            <Link to={'/products/' + product._id} >
                <Card.Img src={product.image} variant='top'></Card.Img>
                <Card.Body as='div'><strong> {product.name}</strong></Card.Body>

            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} color='#fed049' />


            <Card.Text as='h3' className='my-3'>
                ₹{product.price}
            </Card.Text>
        </Card >

    )
}

export default Product
