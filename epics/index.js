import { combineEpics } from 'redux-observable'
import loadTreeData from './loadTreeData'
import {
     checkFirst,
    loadAllCustomer,
    loadOneCustomer,
    addCustomer
} from './customerEpic'




export default combineEpics(
    loadTreeData,

    checkFirst,
    loadAllCustomer,
    loadOneCustomer,
    addCustomer
);


