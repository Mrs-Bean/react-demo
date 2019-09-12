import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          list:[
            {
              cid:1,
              title:'技术胖的个人文章-1'
            },
            {
              cid:2,
              title:'技术胖的个人文章-2'
            },
            {
              cid:3,
              title:'技术胖的个人文章-3'
            }
          ]
        }
        // this.props.history.push("/home")   //也可以做重定向操作
        
    }
    render() { 
        return (
          <div>
            <Redirect to="/home/"></Redirect>  
            <h2>JSPang.com</h2> 
            <ul>
              {
                this.state.list.map((item,index) => {
                  return (
                    <li key={index}>
                      <Link to={'/list/' + item.cid}>{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        );
    }
}
 
export default Index;