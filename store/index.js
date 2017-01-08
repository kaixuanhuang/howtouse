/**
 * Created by huangsihuan on 2017/1/8.
 */
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import {browserHistory } from 'react-router'
import {push} from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(
    browserHistory,
    store
)

export  {store,history,goto}



function goto(path){
    store.dispatch(push(path))
}