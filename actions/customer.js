/**
 * Created by huangsihuan on 2017/1/7.
 */
import * as ActionTypes from '../ActionTypes';


export function addCustomer(customer) {
    return {
        type:ActionTypes.ADD_CUSTOMER,
        payload: {customer}
    }
}

export function loadOneCustomer(customerId) {
    return {
        type:ActionTypes.LOAD_ONE_CUSTOMER,
        payload: {customerId}
    }
}

export function loadAllCustomer() {
    return {
        type:ActionTypes.LOAD_ALL_CUSTOMER,
        payload:'loadAll'
    }
}


export function updateCustomers(customers){
    debugger
    if(customers && customers.length === 0 ){
        return {
            type:ActionTypes.GO_TO_FIRST,
        }
    }


    return {
        type:ActionTypes.UPDATE_CUSTOMER,
        payload:{customers}
    }
}



export function checkFirst() {
    return {
        type: ActionTypes.CHECK_FIRST
    };
}

export function redirectToFirst() {
    return {
        type: ActionTypes.REDIRECT_TO_FIRST
    };
}

