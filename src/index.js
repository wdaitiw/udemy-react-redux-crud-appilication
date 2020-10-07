import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //storeを作成するための関数
import { Provider } from 'react-redux' //createSroreを全コンポーネントに渡す機能を持っている
import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer) //ここでつくられるstoreはこのアプリ上で唯一になる。


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
