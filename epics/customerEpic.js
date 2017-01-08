/**
 * Created by huangsihuan on 2017/1/7.
 */


import { Observable } from 'rxjs/Observable'
import { push } from 'react-router-redux'
import {goto} from '../store'
import CustomerAPI from '../src/apis/CustomerAPI'
import * as ActionTypes from '../ActionTypes'
import {updateCustomers} from '../actions/customer'


export  function checkFirst(action$) {
    return action$.ofType(ActionTypes.GO_TO_FIRST)
                .switchMap(() => {
                    return Observable.of('/customer/first').map(p=>push(p))
                })
}


export  function addCustomer(action$) {
    return action$.ofType(ActionTypes.ADD_CUSTOMER)
        .map(action => action.payload.customer)
        .switchMap(customer =>  {
            return CustomerAPI.addMyCustomer(customer).
                           map((resp)=>push('/howtouse/customer'))
        });
}



export  function loadAllCustomer(action$,a) {
    return action$.ofType(ActionTypes.LOAD_ALL_CUSTOMER)
        .map(action => 'loadAll')
        .switchMap( (type) =>{
            return CustomerAPI.getAllCustomer().map(updateCustomers)
        } )

}



export  function loadOneCustomer(action$) {
    return action$.ofType(ActionTypes.LOAD_ONE_CUSTOMER)
        .map(action => action.payload.customerId)
        .switchMap(type => CustomerAPI.getMyCustomer.bind(null,customerId));
}




