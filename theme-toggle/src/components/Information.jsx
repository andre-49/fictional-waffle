import React, { useContext } from 'react'
import { context } from '../main';
export default function Information() {
    const derivedContext = useContext(context);
    console.log(derivedContext)
  return (
    <body className={derivedContext.toggle?' items-center':' items-center bg-[#36454F] '}>
      <div>Muraho neza</div>
      <button onClick={()=>derivedContext.setToggle(prevToggle=>!prevToggle) } className='border '>toggle</button>
    </body>
  )
}
