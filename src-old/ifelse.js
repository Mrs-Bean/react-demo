import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// function UserGreeting(props) {
//     return  <h1>欢迎回来!</h1>
// }
// function GuestGreeting(props) {
//     return <h1>请先注册。</h1>
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />
//     }
//     return <GuestGreeting />
// }
// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('testten')
// )

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false}
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}
function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
  }
  
function GuestGreeting(props) {
return <h1>请先注册。</h1>;
}

function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {
    return <UserGreeting />;
}
return <GuestGreeting />;
}

function LoginButton(props) {
return (
    <button onClick={props.onClick}>
    登陆
    </button>
);
}

function LogoutButton(props) {
return (
    <button onClick={props.onClick}>
    退出
    </button>
);
}

ReactDOM.render(
<LoginControl />,
document.getElementById('testten')
);

//在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。

//因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
function Mailbox(props) {
    const uneradMessages = props.uneradMessages;
    return (
        <div>
            <h1>Hello</h1>
            {uneradMessages.length > 0 && 
                <h2>
                    您有{uneradMessages.length}条未读信息
                </h2>
            }
        </div>
    )
}
const messages = ['React'];
ReactDOM.render(
    <Mailbox uneradMessages={messages} />,
    document.getElementById('testeleven')
);

//三目运算符 condition ? true : false
// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//         <div>
//             {isLoggedIn ? (
//                 <LoginButton onClick={this.handleLogoutClick} />
//             ) : (
//                     <LoginButton onClick={this.handleLoginClick} />
//                 )}
//         </div>
//     )
// }

//阻止组件渲染
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            警告！
        </div>
    );
}

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = { showWarining: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarining: !prevState.showWarining
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarining} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarining ? '隐藏'  : '显示'}
                </button>
            </div>
        )
    }
}
ReactDOM.render(
    <Page />,
    document.getElementById('testtwelve')
)