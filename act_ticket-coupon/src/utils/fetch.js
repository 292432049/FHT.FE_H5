/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-08-17 14:52:44
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-08-23 17:30:00
 */

import axios from 'axios'
import { Toast } from 'vant'
import { getUserData, removeUserData } from '@/utils/auth'

/* 默认请求参数 */
const defaultConfig = {
  version: '1.0',
  timestamp: new Date().getTime(),
  reqId: 'h5',
  sign: '8F4C4A8E9D850EDD9692DE38723D0543',
  devId: 'h5'
}

/* 创建axios实例 */
const service = axios.create({
  baseURL: process.env.BASE_API,
  interceptors: true, // 是否开启response拦截器 默认true
  noAssign: false // 请求体是否带defaultConfig 默认false
  // timeout: 5000 // 请求超时时间
})

/* request拦截器 */
service.interceptors.request.use(config => {
  /* post请求 */
  if (config.method.toUpperCase() === 'POST') {
    if (getUserData() && getUserData().sessionId) {
      config.data['sessionId'] = getUserData().sessionId
    }
    if (!config.noAssign) {
      config.data = Object.assign(config.data, defaultConfig)
    }
  } else {
    if (getUserData() && getUserData().sessionId) {
      config.params['sessionId'] = getUserData().sessionId
    }
    if (!config.noAssign) {
      config.params = Object.assign(config.params, defaultConfig)
    }
  }
  return config
}, error => {
  console.log('【REQUEST】' + error)
  Promise.reject(error)
})

/* respone拦截器 */
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('【response】' + error)
    if (error.message === '取消重复请求') {
      return Promise.reject(error)
    }
    Toast.fail('连接服务器失败')
    return Promise.reject(error)
  }
)

/* 调用退出系统 */
const logOutMethod = () => {
  removeUserData()
}

/* axios请求体包装 */
const responseMehod = (response, resolve, reject) => {
  const res = response.data
  if (!response.config.interceptors || res.code * 1 === 0) {
    return resolve(res)
  }
  if (res.code * 1 === 1011 && res.message === '数据不存在') {
    logOutMethod()
  }
  Toast.fail(res.message || '未知错误，请联系管理员')
  // sessionId 失效
  if (res.code * 1 === 1016) {
    Toast.fail(`${res.message}，请重新登录`)
    logOutMethod()
  }
  return reject('error')
}

const judgeMethod = (url, params, method = 'post', config = {}) => {
  let requestBody = {
    ...config,
    method,
    url
  }
  if (method.toUpperCase() === 'POST') {
    requestBody.data = params
  } else {
    requestBody.params = params
  }
  return new Promise((resolve, reject) => {
    service(requestBody).then(response => {
      responseMehod(response, resolve, reject)
    })
  })
}

export const fetch = judgeMethod
