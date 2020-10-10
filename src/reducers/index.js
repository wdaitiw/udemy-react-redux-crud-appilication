//アプリに存在する全てのreducer をここに記載する
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
//export default comnbineReducers({foo,bar})