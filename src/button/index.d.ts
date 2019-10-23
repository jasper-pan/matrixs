import * as React from 'react';
import './style';
export interface ButtonProps {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: string;
    offset?: number;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom?: number;
    style?: React.CSSProperties;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
