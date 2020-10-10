//component側であるイベントを掴んだ時に適切な状態遷移の仕組みを行っている。
//Actionは「何をする」という情報を持ったオブジェクトです。Actionはtypeプロパティを必ず持つ必要があります。
import axios from 'axios'


export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'

const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({ type: READ_EVENTS, response })//reducerに渡していく
}