import {DataTable} from 'HarmonyUI'
import React,{Component,PropTypes} from 'react'

export default class ShowCase extends Component{

  render(){
    return (
      <DataTable dataSource={[
           {pservice:'pservice' ,description:'description',qty:'qty1' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty3' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty2' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty4' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty1' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty2' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty3' ,rate:'rate' ,amount:'amount',tax:'tax'},
           {pservice:'pservice' ,description:'description',qty:'qty4' ,rate:'rate' ,amount:'amount',tax:'tax'},
       ]}>
           <DataTable.ColumnDef   hasCheck={true}/>
           <DataTable.ColumnDef   colname="pservice"   colLabel="PRODUCT/SERVICE"/>
           <DataTable.ColumnDef   colname="description"   colLabel="DESCRIPTION"/>
           <DataTable.ColumnDef   sortable={true} colname="qty" colLabel="QTY"   />
           <DataTable.ColumnDef   colname="rate" colLabel="RATE" />
           <DataTable.ColumnDef   colname="amount" colLabel="AMOUNT" />
           <DataTable.ColumnDef   colname="tax" colLabel="TAX"/>
           <DataTable.ColumnDef  hasAction={true}  render={
            (data,trigger)=>{
            console.info('data trigger' ,data,trigger)
            return (<span>
            <i className="fa fa-trash-o"/>
            <i className="fa fa-pencil-square-o" onClick={
                 (e)=>{
                 console.info('click',data);
                 if(trigger) trigger.apply(null,[data,'edit'])
                 }
            }/>
            </span>)}
            }/>
        </DataTable>)
      }
  }
