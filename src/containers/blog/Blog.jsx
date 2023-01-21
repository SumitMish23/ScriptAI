import React from 'react';
import './blog.css';
import {card} from '../../Text'

const Blog = () => {
  
  return (
    <div className="card-container">
      
      {card.map((value,index)=>{
        return <div className={`card card-${index}`}>{value.a} </div>

      })}
     
    
    </div>
  )
}

export default Blog;