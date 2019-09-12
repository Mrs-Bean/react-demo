// 分离出action，容易管理
import { CHANGE_INPUT, ADD_ITEM , DELETE_ITEM } from './actionTypes'

/* 输入input，改变state里的inputValue */
export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

/* 增加列表 */
export const addItemAction = ()=>({
  type:ADD_ITEM
})

/* 删除列表 */
export const deleteItemAction = (index)=>({
  type:DELETE_ITEM,
  index
})