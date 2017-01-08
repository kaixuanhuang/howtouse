/**
 * Created by huangsihuan on 2017/1/7.
 */
import {default as CustomerFetch} from '../fetchs/CustomerFetch'

export class CustomerAPI {

    getMyCustomer = (_custId, query) =>{
        return CustomerFetch.getOne(_custId)
     }

    addMyCustomer = (customer)=>{
        return CustomerFetch.addOne(customer)
    }

    getAllCustomer = ()=>{
        return CustomerFetch.getDefaultCustomers()
    }

    checkCustomer = ()=>{
        getAllCustomer.map(resp  => {
            if(resp && resp.length === 0){
                return false
            }
            return true
        })
    }
}


export default new CustomerAPI