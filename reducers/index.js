import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import treeDataRepos from './treeDataRepos'
import customerRepos from './customerRepos'

export default combineReducers({
  treeDataRepos,
  customerRepos,
  routing: routerReducer
});
