import * as React from 'react'
import { useEffect, useState } from 'react'
const App = (props:any) =>{
  const [name,setName] =useState('hello world')
  useEffect(()=>{
    setName('ohahahah')
  },[])
  return (
    <div className='mat-name'>{name}</div>
  )
}
export default App