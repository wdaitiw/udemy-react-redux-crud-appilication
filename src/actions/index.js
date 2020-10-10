//component側であるイベントを掴んだ時に適切な状態遷移の仕組みを行っている。
//Actionは「何をする」という情報を持ったオブジェクトです。Actionはtypeプロパティを必ず持つ必要があります。
import axios from 'axios'


export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'

const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({ type: READ_EVENTS, response })//reducerに渡していく
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    console.log(response)
    dispatch({ type: CREATE_EVENT, response })//reducerに渡していく
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id })//reducerに渡していく
}
