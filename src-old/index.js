import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import $ from 'jquery';
// import './test.js';
// import './ifelse.js'
// import './list.js';
import './api.js';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
            <h2>今天是星期 {"日一二三四五六".charAt(new Date().getDay())} {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('example')
    );
  }
   
// setInterval(tick, 1000);
  
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  function tick2() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('lasttime')
    );
  }

setInterval(tick2, 1000);

var arr = [
    <h1 key="0">菜鸟教程</h1>,
    <h2 key="1">学的不仅是技术，更是梦想！</h2>,
  ];
  ReactDOM.render(
    <div>{arr}</div>,//JSX 允许在模板中插入数组，数组会自动展开所有成员：
    document.getElementById('test')
  );

function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function Test() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <Test />,
    document.getElementById('test2')
);
  
serviceWorker.unregister();
