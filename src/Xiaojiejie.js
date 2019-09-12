import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './Xiaojiejieitem'
import axios from 'axios'
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:[]
    }
  }
  // componentWillMount----组件将要挂载到页面的时刻执行
  // render----开始挂载渲染
  // componentDidMount----组件挂载完成的时刻执行
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate---组件发生改变前执行')
  //   return true
  // }
  // shouldComponentWillUpdate(){
  //   console.log('shouldComponentWillUpdate')
  // }
  // componentWillUpdate(){

  // }
  // componentDidUpdate(){

  // }
  componentWillMount(){
    //RN 开发中会有点问题
  }
  componentDidMount(){
    //请求数据 axios，这个生命周期只执行一次，看情况使用
    axios.get('https://www.easy-mock.com/mock/5d550eada70ea22c63903fc2/reactdom01/Xiaojijie')
        .then((res)=>{
          console.log('axios 获取数据成功:'+JSON.stringify(res))
          this.setState({
            list:res.data.data
          }) 
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
  render(){
    // console.log('render---组件挂载中')
    return(
      <Fragment>
        <div>
          <label htmlFor="xlp">加入服务:</label>
          <input 
            id="xlp" 
            className="input" 
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input = input}}
          />
          <button 
            onClick={this.addList.bind(this)
          }>增加服务</button>
        </div>
        <ul ref={(ul) => {this.ul = ul }}>
          <TransitionGroup>
          {
            // map循环
            this.state.list.map((item,index)=>{
              //dangerouslySetInnerHTML={{__html:item}  html解析
              return (
                <CSSTransition
                  timeout={2000}
                  classNames="boss-text"
                  unmountOnExit
                  appear={true}
                  key={index+item}
                >
                {/* <li key={index+item} onClick={this.deleteItem.bind(this,index)} >{item}</li> */}
                <XiaojiejieItem content={item} key={index+item} index={index} deleteItem={this.deleteItem.bind(this)} avname='我'></XiaojiejieItem>
                </CSSTransition>
                )
            })
          }
          </TransitionGroup>
        </ul>
        <Boss/>
      </Fragment>
    )
  }
  inputChange(){ //使用ref时 可以不传e来取值
    // console.log(e.target.value)
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }
  addList(){
    this.setState({
      //...扩展运算符
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    },() => {  // 回到函数，来解决异步问题，等虚拟Dom渲染完后执行console
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}
export default Xiaojiejie