import React from 'react';

export const Book = (props) => {
    
      // girq vercnelu orinak@ 
      /* const  book = { 
          title: props.title,
          price: props.price, 
          src: props.src, 
          category: props.category, 
          author: props.author
        };
      
      console.log({book}) */
    
    const style = {visibility: "hidden"};      
    
    return( 
              
        <div className="book-context">
            <h3 className="book-info">{props.title}</h3>
            <p className="book-info text-muted">{props.author}</p>
            <p className="price">{props.price} AMD</p>
            <p style={style}>{props.category} </p>
            <button className="add-to-cart" >Add To Cart</button>
        </div>   
        
    )
}