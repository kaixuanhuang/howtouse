/**
 * Created by huangsihuan on 2017/1/7.
 */
import React,{Component,PropTypes} from 'react'
import {List,ListGroup,ListItem,Image,Button} from 'HarmonyUI'

import MoneyBar from '../moneybar/MoneyBar'
class Income extends  Component{
    static defaultProps = {
        card : {
            imgUrl:'./a',
            itemName:'',
            content:'payrool taxes totaling $123.45 are due in 2 days',

        }
    }

    render(){

        return (
            <div  className="income m-x-1 m-y-2 p-a-2">
                <h2>Income</h2>


                <div className="income-container">
                <div >
                   <div className="income-moneybar">
                      <MoneyBar/>
                   </div>

                <div className="income-action" >
                    <ul>
                        <li> <span>Get paid 2x faster by sending invoices online.<a>Watch video</a></span></li>
                        <li> <Button style={{    width: '100%'}}>Test Driver</Button> </li>
                        <li> <Button style={{    width: '100%'}}>Test Driver</Button></li>
                     </ul>
                </div>
                 </div>

                </div>
            </div>)
    }

}


export default Income
