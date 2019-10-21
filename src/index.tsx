 import * as React from 'react'
 import * as ReactDOM from "react-dom";
interface IProps {
  color?: string,
  size?: string,
}
interface IState {
  count: number,
}
class App extends React.Component<IProps, IState> {
  public state = {
    count: 1,
  }
  public render () {
    return (
       <div>11111</div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))