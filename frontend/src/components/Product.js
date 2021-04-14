import React from 'react';
import { Card } from 'react-bootstrap';



const Product = ({ product }) => {
    return (
        <Card className="p-3 my-3 rounded">
            <a href={'/products/' + product._id} >
                <Card.Img src={product.image} variant='top'></Card.Img>

            </a>
            <Card.Body as='div'><strong> {product.name}</strong></Card.Body>

            <Card.Text as='div' className='my-3'>
                {product.rating} from {product.numReviews} reviews
            </Card.Text>

            <Card.Text as='h3' className='my-3'>
                ₹{product.price}
            </Card.Text>
        </Card >

    )
}

export default Product
