import type { DataType } from "./data"
import { MenuItem } from "./MenuItem"


export const Child = ({menuList} : {menuList : DataType[]}) => {
  return (
    <div>
      {
        menuList && menuList.length > 0 && 
        menuList.map((item) => (
          <div key = {item.id}>
             <MenuItem item = {item}/>
          </div>
        ))
      }
    </div>
  )
}