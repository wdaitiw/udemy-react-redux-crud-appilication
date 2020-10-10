import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //storeを作成するための関数
import { Provider } from 'react-redux' //createSroreを全コンポーネントに渡す機能を持っている
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk' //actionの代わりに関数を返せるようになる。

const store = createStore(reducer, applyMiddleware(thunk)) //ここでつくられるstoreはこのアプリ上で唯一になる。


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
