import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer);

// eslint-disable-next-line react/display-name
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
