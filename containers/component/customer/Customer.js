/**
 * Created by huangsihuan on 2017/1/7.
 */
import React ,{Component,PropTypes} from 'react'
import MoneyBar from '../moneybar/MoneyBar'
import DrawerFooter from '../footer/DrawerFooter'
import {Stage,Form,FormInput,FormSelect,Button,Col,Image,Tabs,SplitView,List,ListGroup,ListItem,Drawer,Panel ,FormRadioGroup,FormTextArea,FormComboInput} from 'HarmonyUI'
import {checkFirst,loadAllCustomer} from '../../../actions/customer'
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'
import {push} from 'react-router-redux'


class Customer extends Component{

    componentDidMount(){

        //this.props.checkFirst();
        this.props.loadAllCustomer()
    }

    render(){

        let customers = get(this.props,'customerRepos.customers')
        let {customerRepos} = this.props
        let groupedCustomers = groupBy(customers,c=>c.FIRSTNAME.substring(0,1).toUpperCase())
        const  listToItem = (list,index)=>{
            return (<ListItem key={index}>
                <span>{`${list.FIRSTNAME} ${list.LASTNAME}`}</span><br/>
                <span>{`${list.DISPLAY_NAME}`}</span><br/>
            </ListItem>)
        }


        return (
            <div>
            <SplitView grid="3 7" style={{height: '100%'}}>
                <SplitView.Left >
                    <Form cols={1}>
                        <FormComboInput padX="0" fakeStyle  placeholder="Search By Name or Componeny" actionType="icon" size="lg" icon="search" actionPosition="right"/>
                        <FormComboInput padX="0" colStyle="p-x-0" placeholder="Sort By:FirstName"  actionType="icon" size="lg" icon="chevron-up" actionPosition="right"/>
                     </Form>
                    <List>
                        {customers && Object.keys(groupedCustomers)
                            .map(key=>
                                (<ListGroup key={key} group={key}>
                                    {groupedCustomers[key] && groupedCustomers[key].map(listToItem) }
                                </ListGroup>)
                            )}
                    </List>
                </SplitView.Left>
                <SplitView.Right>
                    <Stage stageheader={(
                        <div>
                            <div style={{float:'right'}}>
                                <Button onClick={e=> this.refs.drawer.open()}> <i style={{paddingRight:'5px'}} className="hi hi-create primary-text"/><span>Add Customer</span></Button>
                            </div>
                            <h1>Template</h1>

                        </div>
                    )}>
                        <div className="pull-left" style={{textAlign: 'center'}}>
                            <Image label="avantar" src="../avantar.png" width="100px" avatar/>
                            <p>Shared By</p>
                            <strong>Avantar</strong>
                        </div>
                        <div className="pull-right">
                            <MoneyBar/>
                        </div>
                    </Stage>
                    <div className="m-t-1">
                        <Tabs>
                            <Tabs.Section icon="expenses" titleText="Chart of accounts">A</Tabs.Section>
                            <Tabs.Section icon="products" titleText="Products and services">B</Tabs.Section>
                            <Tabs.Section icon="settings-o" titleText="Company Setting">C</Tabs.Section>
                        </Tabs>
                    </div>
                </SplitView.Right>
            </SplitView>

                <Drawer ref="drawer">
                    <Panel title="Basic Infomation">
                        <Form cols={1}  ref="baseInfo">
                            <Col padX="0">
                                <FormInput label="Title" col="2" name="title"/>
                                <FormInput label="Name" col="4" name="name"/>
                                <FormInput label="Middle name" col="3" name="middlename"/>
                                <FormInput label="Last name" col="3" name="lastname"/>
                            </Col>
                            <Col padX="0">
                                <FormRadioGroup name="type" sources={[{id:'a',name:'Individual'},{id:'b',name:'Company'}]} inline="true" />
                            </Col>
                            <FormInput label="Display Name" name="dispName" required/>
                        </Form>
                    </Panel>
                    <Panel open={false} title="Contact Info"></Panel>
                    <Panel open={false} title="Tax Info"></Panel>
                    <Panel open={false} title="Payment and Billing"></Panel>
                    <Form cols={1} ref="note">
                        <FormTextArea name="note" label="NOTE" placeholder="Notes for the customer" rows={6}/>
                    </Form>

                    <DrawerFooter>
                        <Button onClick={e=> alert(JSON.stringify(this.refs.baseInfo.getFormdata()))} color="primary">Save</Button>
                    </DrawerFooter>
                </Drawer>


               </div>)
    }
}


import {connect} from 'react-redux'

export default connect(
    ({customerRepos})=> ({customerRepos})
    ,{loadAllCustomer,checkFirst}
)(Customer)