import React from 'react'
import { Card } from "react-bootstrap"
import PropTypes from 'prop-types'

const Rating = (props) => {
    return (
        <div className='rating'>

            <span>

                <i style={{ color: props.color }} className={props.rating > 0 ? (props.rating > 0.5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star'}></i>
                <i style={{ color: props.color }} className={props.rating > 1 ? (props.rating > 1.5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star'}></i>
                <i style={{ color: props.color }} className={props.rating > 2 ? (props.rating > 2.5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star'}></i>
                <i style={{ color: props.color }} className={props.rating > 3 ? (props.rating > 3.5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star'}></i>
                <i style={{ color: props.color }} className={props.rating > 4 ? (props.rating > 4.5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star'}></i>
            </span>
            <Card.Text as='div' className='my-3'>
                {props.rating} from {props.numReviews} reviews
            </Card.Text>
        </div>
    )

}

export default Rating
