import { Child } from "./Child"
import { data } from "./data"



export const Parent = () => {
  return (
    <div className = 'h-[100vh] w-[300px] bg-zinc-600 py-2'>
      <Child menuList = {data}/>
    </div>
  )
} 