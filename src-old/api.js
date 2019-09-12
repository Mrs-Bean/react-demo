import React from 'react';
import ReactDOM from 'react-dom';
import $ from  'jquery'
//setState
// setState(object nextState[, function callback])

//nextState, 将要设置的新状态，该状态会和当前的state合并
//callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用
//setState() 并不会立即改变this.state, 而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
//setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = { clickCount: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(function (state) {
            return { clickCount: state.clickCount + 1 };
        })
    }
    render() {
        return (<h2 onClick={this.handleClick}>click me!The number of clicks is:{this.state.clickCount}</h2>)
    }
}
ReactDOM.render(
    <Counter />,
    document.getElementById('api')
)
//replaceState 
// nextState，将要设置的新状态，该状态会替换当前的state。
// callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
// replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除

// setProps
// setProps(object nextProps[, function callback])
// nextProps，将要设置的新属性，该状态会和当前的props合并
// callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
// 设置组件属性，并重新渲染组件。
// props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
// 更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。

// replaceProps
// replaceProps(object nextProps[, function callback])
// nextProps，将要设置的新属性，该属性会替换当前的props。
// callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
// replaceProps()方法与setProps类似，但它会删除原有 props

// forceUpdate
// forceUpdate([function callback])
// 参数说明
// callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
// forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
// forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()
// 一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。

// findDOMNode
// DOMElement findDOMNode()
// 返回值：DOM元素DOMElement
// 如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

// isMounted
// bool isMounted()
// 返回值：true或false，表示组件是否已挂载到DOM中
// isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。

// this.setState(function (prevState, props) { // 普通函数
//     return {
//         counter: prevState.counter + props.increment
//     }
// })

// this.setState((prevState, props) => ({ // 箭头函数
//     counter: prevState.counter + props.increment
// }))

// constructor(props) {
//     super(props);
//     this.state = {
//         posts: [],
//         comments: []
//     };
// }

// 生命周期的方法有：

// componentWillMount 在渲染前调用,在客户端也在服务端。

// componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
// 可以在你确认不需要更新组件时使用。

// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

// componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 1.0 };
    }
    componentDidMount() {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this),100)
    }
    render() {
        return (
            <div style={{ opacity: this.state.opacity }}>
                Hello {this.props.name}
            </div>
        )
    }
}
// ReactDOM.render(
//     <Hello name="world" />,
//     document.getElementById('smzq')
// )

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 0 };
        this.setNewNumber = this.setNewNumber.bind(this)
    }
    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>increment</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
   
      render() {
        return (
          <div>
            <h3>{this.props.myNumber}</h3>
          </div>
        );
      }
  }
  ReactDOM.render(
     <div>
        <Button />
     </div>,
    document.getElementById('smzq_2')
  );

class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', lastGistUrl: '' };
    }
    
    componentDidMount() {
        this.serverRequest =$.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
              username: lastGist.owner.login,
              lastGistUrl: lastGist.html_url
            });
          }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
      }
     
      render() {
        return (
          <div>
            {this.state.username} 用户最新的 Gist 共享地址：
            <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
          </div>
        );
      }
}
ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('example2')
  );

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Hello Runoob' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <h4>{value}</h4>
        </div>
    }
}
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example3')
)

class Content2 extends React.Component {
    render() {
      return  <div>
              <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
              <h4>{this.props.myDataProp}</h4>
              </div>;
    }
}
class HelloMessage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <div>
                <Content2 myDataProp = {value} 
                updateStateProp = {this.handleChange}></Content2>
                </div>;
    }
}
  ReactDOM.render(
    <HelloMessage2 />,
    document.getElementById('example4')
  );