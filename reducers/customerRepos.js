/**
 * Created by huangsihuan on 2017/1/7.
 */

import * as ActionTypes from '../ActionTypes';
import {goto} from '../store'


export default function customerRepos(state = {}, action) {
    debugger
    switch (action.type) {
        case ActionTypes.GO_TO_FIRST:
            return state
        case ActionTypes.ADD_CUSTOMER:
            return {...state}
        case ActionTypes.LOAD_ALL_CUSTOMER:
            return state
        case ActionTypes.LOAD_ONE_CUSTOMER:
            return {...state}
        case ActionTypes.UPDATE_CUSTOMER:
            return {...state,customers:action.payload.customers}
        default:
            return state;
    }
}

