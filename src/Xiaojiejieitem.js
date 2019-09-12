import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojijieItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  // //也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
  // //如果已经存在于Dom中，函数才会被执行。
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }
  // //当组件从页面中删除的时候执行
  // componentWillUnmount(){
  //   console.log('child-componentWillUnmount')
  // }
  // state = {  }

  // 性能问题解决
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{    
        return false
    }
    
  }
  render() { 
    console.log('child-render')
    return ( 
      <div onClick={this.handleClick}>
        {this.props.avname}:{this.props.content}
      </div>
     );
  }

  handleClick(){
    // console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}
// 属性校验
XiaojijieItem.propTypes={
  avname:PropTypes.string.isRequired,
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
}
// 默认值
// XiaojijieItem.defaultProps={
//   avname:'她'
// }
export default XiaojijieItem;