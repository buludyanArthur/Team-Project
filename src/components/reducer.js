import React, { useReducer, useRef } from 'react'

function Reduceer(){
    const inputRef=useRef();
  const [items, dispatch]  = useReducer((state, action) => {
    switch(action.type){
        case 'add':
            return [
                ...state,
                {
                    id: state.length,
                    title: action.title
                }
            ];
        case 'remove':
            return state.filter((_, index) => index !== action.index);
        case 'clear':
            return [];
        default: return state;
    }
  }, []);  

  function handleSubmit(e) {
      e.preventDefault();
      dispatch({
          type: 'add',
          title: inputRef.current.value
      });
      inputRef.current.value = '';

      
  }
    return(
        <div>
            <h3>cart</h3>
            <form onSubmit={handleSubmit}>
            <input ref={inputRef}/>
            </form>
            <button onClick={()=>
            dispatch({type: 'clear'})
            }>Clear</button>
       <ol>
           {items.map((item, index) => (
            <li key={item.id}>{item.title}
            <button onClick={()=>
            dispatch({type: 'remove', index})
            }>X</button>

            </li>   
           ))}
       </ol>
       </div>
    )
    
    
    
}
export default Reduceer;