/**
 * Created by huangsihuan on 2016/12/31.
 */
import React,{Component} from 'react'
import {DropDown,Form,FormSelect,FormEmpty,FormDatePicker,FormInput,FormTextArea,Row,Col,DataTable} from 'HarmonyUI'
class TrowserSection extends Component{

   render(){
       let paymentFormData = this.props.payment
        return <div className="m-b-0">
            <div className="stage">
                <header className="stage-header p-x-1">
                    <div className="pull-left">
                        <Form cols={1} data={paymentFormData} ref="customerForm">
                            <FormSelect className="m-l-1" labelSpace={false} name="customer" placeholder="Choose a customer" options={[]}/>
                        </Form>
                    </div>
                    <div className="pull-right" style={{    position: 'relative', top: '-1em'}}>
                        <label>AMOUNT RECIEVED</label><br/>
                        <span style={{fontSize:'2.5em'}}>$0.00</span>
                    </div>
                </header>
            </div>


            <div className="p-x-1">
                <Form  data={paymentFormData} defaultGrid={false}  horizontal ref="paymentForm" >

                    <Col className="p-x-0" col="4">
                        <FormDatePicker   col="6" name="payDate" label="支付日期" />
                        <FormSelect   col="6" name="payWay" label="支付方式" options={[]}/>
                    </Col>
                    <Col className="p-x-0" col="4">
                        <FormInput col="5" required name="reference" label="编号" />
                        <FormSelect   col="7" required  name="depositTo" label="存入" options={[ {value:'a',text:'as'}]}/>
                    </Col>
                    <Col className="p-x-0" col="4">
                        <FormEmpty  col="8" />
                        <FormInput col="4"   required name="totalAmount"  label="总额" />
                    </Col>

                    <Col className="p-x-1 m-t-1 pull-left" col="12">
                        <DataTable  dataSource={[
                            {description:'#transition 1000',dueDate:'2015/09/18' ,orginAoumt:'25.00' ,balance:'30.00',payment:''},
                        ]}>
                            <DataTable.ColumnDef   fixhead={true} hasCheck={true}/>
                            <DataTable.ColumnDef   fixhead={true} colname="description"   colLabel="DESCRIPTION"/>
                            <DataTable.ColumnDef   sortable={true} colname="dueDate" colLabel="DUE DATE"   />
                            <DataTable.ColumnDef   colname="orginAoumt" colLabel="ORIGIN AMOUNT" />
                            <DataTable.ColumnDef   colname="balance" colLabel="OPEN BALANCE" />
                            <DataTable.ColumnDef   colname="payment" colLabel="PAYMENT"/>
                            <DataTable.ColumnDef   fixtail={true} hasAction={true}  render={
                                (data)=>{
                                    return(<span>
                                  <i className="fa fa-trash-o" onClick={(e)=>console.info('click',data)}/>
                         </span>)
                                }
                            }/>
                        </DataTable>
                    </Col>


                    <Col className="m-b-0 p-x-0" col="12">
                            <FormTextArea  col="4" rows={3}  name="memo" label="memo"/>
                            <FormEmpty col="4" />
                            <FormTextArea  col="4" rows={3}  name="attachment" label="attachment"/>
                    </Col>

                </Form>
            </div>

        </div>
    }

}

export default TrowserSection
