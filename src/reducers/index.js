//アプリに存在する全てのreducer をここに記載する
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
//export default comnbineReducers({foo,bar})