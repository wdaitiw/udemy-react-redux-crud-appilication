import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT
} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, "id")
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            //console.log(action.response.data)
            //{id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
            return { ...events, [data.id]: data }
        //return _.mapKeys(action.response.data, "id")

        case DELETE_EVENT:
            console.log(action.id)
            delete events[action.id]
            return { ...events }//更新されたeventsを返してくれる
        default:
            return events
    }
}