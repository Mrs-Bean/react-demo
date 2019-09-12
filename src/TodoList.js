import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'
// types 管理
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction ,deleteItemAction } from './store/actionCreators'
//这里改为store
// const data = [
//   '早8点开晨会，分配今天的开发工作',
//   '早9点和项目经理作开发需求讨论会',
//   '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
  constructor(props){
    super(props)
    console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
          <div>
              <Input 
                placeholder={this.state.inputValue} 
                style={{ width:'250px', marginRight:'10px'}} 
                onChange={this.changeInputValue}
                value={this.state.inputValue}   //如果input绑定value ，必须要订阅redux的状态 20/21，storeChange()方法开启
              />
              <Button 
                type="primary"
                onClick={this.clickBtn}
              >增加</Button>
          </div>
          <div style={{margin:'10px',width:'300px'}}>
              <List
                  bordered
                  dataSource={this.state.list}
                  renderItem={(item,index)=>(<List.Item onClick = {this.deleteItem.bind(this,index)}>{item}</List.Item>)}
              />    
          </div>
      </div>
     );
  }

  changeInputValue(e){
    // const action = {
    //   type:CHANGE_INPUT,
    //   value:e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange(){
    this.setState(store.getState())
  }

  clickBtn(){
    // const action = {type:ADD_ITEM}
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index){
    // console.log(index)
    // const action = {
    //   type:DELETE_ITEM,
    //   index
    // }
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;