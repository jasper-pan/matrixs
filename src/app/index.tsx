import * as React from 'react'
import { useEffect, useState } from 'react'
// tslint:disable-next-line: interface-name
export interface AppProps {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  offset?: number;
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number;
  style?: React.CSSProperties;
 }

 const App = (props:AppProps) =>{
  const [name,setName] =useState('hello world')
  useEffect(()=>{
    setName('ohahahah')
  },[])
  return (
    <div className='mat-name'>{name}</div>
  )
}
export default App