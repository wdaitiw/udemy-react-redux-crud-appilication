import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi!")
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => ( //eventはなんでもいい
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
        <div>
          {console.log(props.events)}
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ events: state.events })//state.eventsはevents.jsで定義されているeventsと同等
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
