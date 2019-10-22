import * as React from 'react'
import { useEffect, useState } from 'react'
const Alert = (props:any) =>{
  const [name,setName] =useState('hello world')
  useEffect(()=>{
    setName('ohahahah')
  },[])
  return (
    <div>{name}</div>
  )
}
export default Alert