import { useState } from "react"
import { data } from "./data";
import './accordion.css'


export const Accordion = () => {

  const [active , setActive] = useState<number>(-1);
  
  return (
    <div className = 'wrapper-container'>
      <h1 style={{textAlign : 'center'}}>Accordion Component</h1>
      <div className = 'accordion-container'>
        {
          data.map((item , ind) => (
            <div key = {ind} className = 'item'>
              <div className = 'item-header'>
                <div className = 'title'>
                  {item.title}
                </div>
                <div>
                  {
                    active === ind ? 
                    <div onClick = {() => setActive(-1)} className = 'caret'> v </div> : 
                    <div onClick = {() => setActive(ind)} className = 'caret'> ^ </div>
                  }
                </div>
              </div>
              {
                active === ind ? 
                <div className = 'item-content'>
                  {item.content}
                </div> 
                : null
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}