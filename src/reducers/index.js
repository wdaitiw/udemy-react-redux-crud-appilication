//アプリに存在する全てのreducer をここに記載する
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })