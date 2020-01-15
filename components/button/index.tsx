import * as React from 'react'
import { useEffect, useState } from 'react';
export interface IButtonProps {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: string;
  offset?: number;
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number;
  style?: React.CSSProperties;
 }

 const Button = (props: IButtonProps) => {
  const offsetTop = props.offsetTop as string;
  const [name, setName] = useState('hello world')
  useEffect(() => {
    setName(offsetTop)
  }, [])
  return (
    <div className='mat-name'>
      <button className='mat-btn'>
        <span>{name}</span>
      </button>
    </div>
  )
}
export default Button;
