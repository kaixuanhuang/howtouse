/**
 * Created by huangsihuan on 2017/1/7.
 */
import React,{Component,PropTypes} from 'react'
import {List,ListGroup,ListItem,Image} from 'HarmonyUI'
class QuickCard extends  Component{
    static defaultProps = {
        card : {
            imgUrl:'./a',
            itemName:'Get set up by a pro',
            content:'let your accountant access your books and help you get set up',

        }
    }

    render(){
        let {itemName,src,content} = this.props.card
        return (
            <div style={{backgroundColor:'#fff',boxShadow: '0  3px 0 0 #DAE3EF',textAlign:'center'}} className="m-x-1 m-y-2 p-a-2">
                <Image src={src} width="100" height="100" />
                <h2>{itemName}</h2>
                <span>{content}</span>
           </div>)
    }

}


export default QuickCard
