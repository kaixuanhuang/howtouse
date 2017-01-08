/**
 * Created by huangsihuan on 2017/1/7.
 */
import BaseFetch from './BaseFetch'
export class CustomerFetch extends BaseFetch{
    getDefaultCustomers = ()=>{
        debugger
        return this.fetch.get('customers')
    }
    getOne = (customerId)=>{
        return this.fetch.get(`customers/${customerId}`)
    }
    addOne = (customer)=>{
        return this.fetch.post(`customers/`,customer)
    }
}
export default new CustomerFetch