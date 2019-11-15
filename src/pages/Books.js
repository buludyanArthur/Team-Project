import React from 'react';
import BooksList from '../components/BooksList'

export default function Books (props) {
    return (
        <div>
            <BooksList history={props.history} match={props.match} />
        </div>
       
    )
}