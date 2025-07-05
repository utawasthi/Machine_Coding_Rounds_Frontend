import { FaStar } from "react-icons/fa";
import './star-rating.css'
import { useState } from "react";


export const StarRating = () => {

  const [activeIndex , setActiveIndex] = useState<number>(-1);

  return (
    <div className = 'main-wrapper'>
     <h2 style={{marginBottom : '100px', textAlign : 'center'}}>Star Rating Component</h2>
     <div className = 'star-component-wrapper'>
      {
        [...Array(5)].map((_ , ind) => (
          <div onClick = {() => setActiveIndex(ind)} style = {{padding : '10px'}}>
            <FaStar className = {activeIndex >= ind ? 'fa-star active' : 'fa-star'}/>
          </div>
        ))
      }
     </div>
    </div>
  )
}