const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
import {pagetType} from '../config/apis'

// 页面类型一些接口
export const FETCH_SAVE_PAGETYPE = async data => {
  return await fetch(pagetType, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => response.json())
}
