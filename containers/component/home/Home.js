/**
 * Created by huangsihuan on 2017/1/7.
 */
import React ,{Component,PropTypes} from 'react'
import MoneyBar from '../moneybar/MoneyBar'
import QuickCard from '../home/QuickCard'
import Income from '../home/Income'
import TaskList from '../tasklist/TaskList'
import {Tabs,SplitView,List,ListGroup,ListItem,Stage,Button,Image,Switch,Row,Col} from 'HarmonyUI'
import groupBy from 'lodash/groupBy'
import keys from 'lodash/keys'
import startsWith from 'lodash/startsWith'
function Home(props){
    const data = [
        {tn:'asdf',used:'3'},
        {tn:'axx',used:'3'},
        {tn:'Bgfd',used:'3'},
        {tn:'Bxfd',used:'3'},
        {tn:'Bffdgd',used:'3'},
        {tn:'Agdsafd',used:'3'},
        {tn:'Bgdsafd',used:'3'},
        {tn:'Bgfdxfd',used:'3'},
        {tn:'Bffhgdhdgd',used:'3'},
        {tn:'Agjgfdjfd',used:'2'},
        {tn:'Bjgfdjgfd',used:'3'},
        {tn:'Bjgdjxhgfd',used:'3'},
        {tn:'Bffjgfdktdgd',used:'3'},
    ]

    let newData = groupBy(data,(v)=>v.tn.substring(0,1).toUpperCase())
    const  listToItem = (list,index)=>{
        return (<ListItem key={index}>
            <span>{list.tn}</span><br/>
            <span>{`used by ${list.used} others`}</span><br/>
        </ListItem>)
    }

    return (<SplitView grid="7 3" style={{height: '100%',backgroundColor:'#f9fafb'}} >
        <SplitView.Left >


            <div className="user-info m-x-1 m-y-2">

                <div  className="left">
                    <Image src="./avantar.png" avatar width="100" height="100" className="pull-left"/>
                    <div style={{display:"inline-block",position:'absolute', bottom: '1em'}}>
                        <strong style={{display:'inline-block',marginBottom:'0.5em'}}>Component name</strong><br/>
                        <span>test APRIAL</span>
                    </div>
                </div>

               <div  style={{position:'absolute', bottom: '1em' , right: '1em'}}>
                   <label htmlFor="mode">Primary Mode</label>
                   <Switch id="mode"/>
               </div>
          </div>


            <TaskList/>


            <Row>
                <Col col="4"><QuickCard/></Col>
                <Col col="4"><QuickCard/></Col>
                <Col col="4"><QuickCard/></Col>
             </Row>


            <Income/>

        </SplitView.Left>
        <SplitView.Right>
        </SplitView.Right>
    </SplitView>)
}
export default Home
