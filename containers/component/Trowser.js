/**
 * Created by huangsihuan on 2016/12/31.
 */
import React,{Component} from 'react'
import TrowserHeader from './header/TrowserHeader'
import TrowserFooter from './footer/TrowserFooter'
import TrowserSection from './section/TrowserSection'
class Trowser extends Component{

    componentDidMount(){
       // document.client
    }

   render(){
        let {routeParams} = this.props
        let itemname = routeParams.item,trowserTitle
        debugger
        switch(itemname){
            case 'invoice': trowserTitle = 'Invoice';break;
            case 'payment': trowserTitle = 'Payment';break;
            default: break;
        }
        return (
            <div>
                <TrowserHeader title={trowserTitle} />
                <TrowserSection  item={itemname}/>
                <TrowserFooter item={itemname}/>
            </div>)
    }
}

export default Trowser