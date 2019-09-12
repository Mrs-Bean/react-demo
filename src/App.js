import React,{Component} from 'react'
import { directive } from '@babel/types';
import { unlink } from 'fs';
class App extends React.Component{
  render(){
    return(
      // <div>
      //   Hello world
      // </div>
      <ul className="my-list">
        <li>hello world</li>
        <li>I love react</li>
        <li>{true?'first':'second'}</li>
      </ul>
    )
    //等价于
    // var child1 = React.createElement('li', null, 'JSPang.com');
    // var child2 = React.createElement('li', null, 'I love React');
    // var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
  }
}
export default App;