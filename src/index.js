import React from 'react'
import ReactDOM from 'react-dom'
// import Xiaojiejie from './Xiaojiejie'
// import AppRouter from './AppRouter'
// import AppRouterTwo from './AppRouterTwo'
// import TodoList from './TodoList'
//-----------使用react-redux---------
import TodoListRRedux from './TodoList-r-redux'
import { Provider } from 'react-redux'
import store from './store'
const AppNew = (
  <Provider store={store}>
    <TodoListRRedux />
  </Provider>
)
//----------------------------------


// ReactDOM.render(<Xiaojiejie />,document.getElementById('root'))
// ReactDOM.render(<TodoList />,document.getElementById('root'))
ReactDOM.render(AppNew,document.getElementById('root'))