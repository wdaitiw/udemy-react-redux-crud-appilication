import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //storeを作成するための関数
import { Provider } from 'react-redux' //createSroreを全コンポーネントに渡す機能を持っている
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk' //actionの代わりに関数を返せるようになる。
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

//development環境においてはredux-devtools-extensionでデバックできるようにする
const enchancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

const store = createStore(reducer, enchancer) //ここでつくられるstoreはこのアプリ上で唯一になる。


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsShow} />
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
