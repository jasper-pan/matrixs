import * as React from 'react'
import { useState } from 'react'
const App = (props:any) =>{
  const [name,setName] =useState('hello world')
  return (
    <div>{name+name}</div>
  )
}
export default App