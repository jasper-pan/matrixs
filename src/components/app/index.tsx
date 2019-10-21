import * as React from 'react'
import { useState } from 'react'
const App = (props:any) =>{
  const [name,setName] =useState('笑话')
  return (
    <div>{name}</div>
  )
}
export default App