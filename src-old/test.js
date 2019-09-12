import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//Props 
//实例中name属性通过props。name来获取
function HelloMessage(props) {
    return <h1>Hello {props.name} </h1>
}
const element = <HelloMessage name="Runoob" />

ReactDOM.render(
    element,
    document.getElementById('testthree')
)

//props也可以设置默认值，通过类的defaultProps属性
class TestFour extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}
TestFour.defaultProps = {
    name: 'Runoob'  //默认值
}
const elementfour = <TestFour /> // 这里传值的话，可以替换掉默认值

ReactDOM.render(
    elementfour,
    document.getElementById('testFour')
)

//State 和 Props 结合
class Website extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "3N合伙人",
            site: "http://www.baidu.com"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site}/>
            </div>
        )
    }
}
class Name extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
}
class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>{this.props.site}</a>
        )
    }
}
ReactDOM.render(
    <Website />,
    document.getElementById('testfive')
)

//propTypes 验证
//它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
var title = "菜鸟教程";
// var title = 123; //  index.js:1375 Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`. in MyTitle (at test.js:91)

//React 16.4实例
class MyTitle extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.title}</h1>
    );
  }
}
 
MyTitle.propTypes = {
  title: PropTypes.string
};
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('testsix')
);
//React 15.4实例
// var title = "react学习";
// // var title = 123;
// var MyTitle = React.createClass({
//     propTypes: {
//         title: React.PropTypes.string.isRequired,
//     },
//     render: function () {
//         return <h1>{this.props.title}</h1>
//     }
// });
// ReactDOM.render(
//     <MyTitle title={title} />,
//     document.getElementById('textseven')
// )
//事件处理
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        //这边绑定是必要的，这样’this‘ 才能再回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('testseven')
)

class LoggingButton extends React.Component {
    //这个语法确保了 this 绑定在 handleClick 中
    //这里只是个测试
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}
ReactDOM.render(
    <LoggingButton />,
    document.getElementById('testeight')
)

//如果没有使用属性初始化器语法，你可以在回调函数中使用箭头函数
class LoggingButtonT extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        //这个语法确保了 this 绑定在 handleClick 中
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        )
    }
}
ReactDOM.render(
    <LoggingButtonT />,
    document.getElementById('testnine')
)

//向事件处理程序传递参数
//通常我们会为事件处理程序传递额外的参数。例如，若是 id 是你要删除那一行的 id，以下两种方式都可以向事件处理程序传递参数：

/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */
/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */
//上述两种方式是等价的。
//Adobe Photoshop CC 2017.zip上面两个例子中，参数 e 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

//值得注意的是，通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面，例如:

// class Popper extends React.Component{
//     constructor(){
//         super();
//         this.state = {name:'Hello world!'};
//     }
    
//     preventPop(name, e){    //事件对象e要放在最后
//         e.preventDefault();
//         alert(name);
//     }
    
//     render(){
//         return (
//             <div>
//                 <p>hello</p>
//                 {/* 通过 bind() 方法传递参数。 */}
//                 <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
//             </div>
//         );
//     }
// }
serviceWorker.unregister();