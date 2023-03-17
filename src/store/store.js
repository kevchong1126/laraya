import {  legacy_createStore as createStore } from 'redux';

import reducers from './reducersCombiner';

const store = createStore(reducers);

export default store
