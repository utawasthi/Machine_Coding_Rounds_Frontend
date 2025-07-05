import { useState } from "react";
import { Child } from "./Child"
import type { DataType } from "./data"


export const MenuItem = ({item} : {item : DataType}) => {

  const [showChildren , setShowChildren] = useState<boolean>(false);

  return (
    <div className = 'border-b-[0.1px] border-white'>
      <div className = 'flex justify-between pr-4 pl-2 items-center py-3 m-1'>
          <div className = 'text-white font-light text-lg'>
            {item.label}
          </div>
          {
            item.children && item.children.length > 0 ? (
            showChildren ? 
              <span 
                onClick = {() => setShowChildren(false)}
                className = 'text-white text-2xl cursor-pointer'
              > 
                - 
              </span> : 
              <span 
                onClick = {() => setShowChildren(true)}
                className = 'text-white text-2xl cursor-pointer'
              > 
                + 
              </span>
            ) : null
          }
      </div>
      <div>
        {
          showChildren && item.children && item.children.length > 0 && 
          <Child menuList = {item.children} />
        }
      </div>
    </div>
  )
}