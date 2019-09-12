import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'

//-----------无状态组件写法----------
// const TodoList =(props)=>{
//   let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
//   return (
//       <div>
//           <div>
//               <input value={inputValue} onChange={inputChange} />
//               <button onClick={clickButton}>提交</button>
//           </div>
//           <ul>
//               {
//                   list.map((item,index)=>{
//                       return (<li key={index}>{item}</li>)
//                   })
//               }
//           </ul>
//       </div>
//   );
// }
//------------------------------------------
class TodoList extends Component {
    
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() {
      let { inputValue,inputChange,clickButton,list } = this.props //可以去掉下面this.props的前缀
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={inputChange} />
                    <button
                      onClick={clickButton} 
                    >提交</button>
                </div>
                <ul>
                    {/* <li>JSPang</li> */}
                    {

                      list.map((item,index) => {
                        return (<li key={index}>{item}</li>)
                      })
                  }
                </ul>
            </div>
            );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            // console.log(e.target.value)
            let action = {
              type : 'change_input',
              value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
          // console.log('2')
          let action = { type:'add_item' }
          dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);  //connnect 连接器