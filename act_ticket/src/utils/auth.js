/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-08-17 16:00:08
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-08-17 16:49:52
 */

import store from 'store'

const userDataKey = 'MLSH-active10'

export function getUserData () {
  return store.get(userDataKey)
}

export function setUserData (data) {
  return store.set(userDataKey, data)
}

export function removeUserData () {
  return store.remove(userDataKey)
}
