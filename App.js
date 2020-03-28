import React, { Component } from 'react';
import Router from './src/config/router';
import {createStore} from 'redux';
import {Provider, createStoreHook} from 'react-redux';
import rootReducer from './src/config/redux/reducer/counterReducer';

const storeRedux = createStore(rootReducer);
class App extends Component{
  render(){
    return (
      <Provider store={storeRedux}>
        <Router />
      </Provider>
    );
  }
}

export default App