import React ,{Component,PropTypes} from 'react'
import MoneyBar from '../moneybar/MoneyBar'
import {Tabs,SplitView,List,ListGroup,ListItem,Stage,Button,Image,DataTable,ComboLink,Step} from 'HarmonyUI'
import groupBy from 'lodash/groupBy'
import keys from 'lodash/keys'
import startsWith from 'lodash/startsWith'
function Sales(props){
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

  return (
    <div >
    <Stage stageheader={(
    <div>
    <div style={{float:'right'}}>
      <Button>
         <i style={{paddingRight:'5px'}} className="hi hi-create primary-text"/>
         <span>Add to Template</span>
      </Button>
      <Button color="primary">
         <i style={{paddingRight:'5px'}} className="hi hi-create primary-text"/>
         <span>Add to Template</span>
      </Button>
    </div>
    <h1>Sales Transition</h1>
    </div>
  )}>
    <MoneyBar/>
  </Stage>
  <div>
    <DataTable paganition dataSource={[
      {custover:'custover'},
      {custover:'custoverA'}
    ]}>
     <DataTable.ColumnDef hasCheck = {true}/>
     <DataTable.ColumnDef colname="custover" colLabel="CUSTOVER"/>
     <DataTable.ColumnDef colname="date" colLabel="Date"/>
     <DataTable.ColumnDef colname="type" colLabel="TYPE"/>
     <DataTable.ColumnDef colname="balance" colLabel="BALANCE"/>
     <DataTable.ColumnDef colname="staus" colLabel="Status" render={
       (data)=>{
         return <Step size="sm"/>
       }
     }/>
     <DataTable.ColumnDef colname="actions" colLabel="Actions"/>
     <DataTable.ColumnDef hasAction={true} render={
       (data)=>{
         return (<ComboLink>
           <Button>Print</Button>
           <Button>Recieve Payment</Button>
           <Button>Print2</Button>
           </ComboLink>)
       }
     }/>
    </DataTable>
  </div>

  </div>)
}
export default Sales
