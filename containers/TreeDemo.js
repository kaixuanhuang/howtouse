
import {Stage,DateTimePicker,Tree,Switch,Button,MenuButton,ComboButton,ComboLink,DataTable,
    UIRadioGroup,DropDown,Tabs,Row,Col,Pagination,Form,FormInput,FormTextArea,FormSelect,FormDatePicker,Modal,
    Message,ComboInput,FormComboInput,Menu,MenuItem,SideNav,Tip,IconCombo,FormDateRangerPicker,Step,Flow
  } from 'HarmonyUI'

import  {default as  Design} from './component/Design'

import React,{Component,PropTypes} from 'react'
import { loadTreeData ,treeShowCheck} from '../actions';



class TreeDemo extends Component{

  componentWillMount(){
    this.props.loadTreeData('tree');
    this.props.treeShowCheck(true);
  }


  render(){
    let {treeDataRepos,routeParams} = this.props
    let {name} = routeParams

    return (
        <div>


          <div>
            <label>demo</label>
            <ComboInput actionType="icon" icon="search"/>
            <code> {"\<ComboInput\/\>"}</code>
            <p>combo</p>
            <ComboInput actionType="icon" size="lg" icon="search" actionPosition="left"/>
            <ul>
              <li>props</li>
              <li> actionType  分为下拉select 和 图标icon</li>
              <li>icon  图标</li>
            </ul>
          </div>




          <div className="icon-list-demo">
            <i className="hi hi-accountant"></i>
            <i className="hi hi-apps"></i>
            <i className="hi hi-bank"></i>
            <i className="hi hi-chat"></i>
            <i className="hi hi-customers"></i>
            <i className="hi hi-dashboard"></i>
            <i className="hi hi-employees"></i>
            <i className="hi hi-expenses"></i>
            <i className="hi hi-help"></i>
            <i className="hi hi-accountant-tool"></i>
            <i className="hi hi-inventory"></i>
            <i className="hi hi-invoices"></i>
            <i className="hi hi-payments"></i>
            <i className="hi hi-checks"></i>
            <i className="hi hi-products"></i>
            <i className="hi hi-reports"></i>
            <i className="hi hi-star"></i>
            <i className="hi hi-receipts"></i>
            <i className="hi hi-schedule"></i>
            <i className="hi hi-settings"></i>
            <i className="hi hi-taxes"></i>
            <i className="hi hi-transactions"></i>
            <i className="hi hi-vendors"></i>
            <i className="hi hi-marketing"></i>
            <i className="hi mailbox"></i>
            <i className="hi hi-appointment"></i>
            <i className="hi hi-checkmark"></i>
            <i className="hi hi-attach"></i>
            <i className="hi hi-audio"></i>
            <i className="hi hi-bookmark"></i>
            <i className="hi hi-labs"></i>
            <i className="hi hi-calendar"></i>

            <i className="hi hi-camera"></i>
            <i className="hi hi-cancel"></i>
            <i className="hi hi-cash"></i>
            <i className="hi hi-add-user"></i>
            <i className="hi hi-chat-o"></i>
            <i className="hi hi-check-o"></i>
            <i className="hi hi-note"></i>
            <i className="hi hi-offline"></i>
            <i className="hi hi-phone"></i>
            <i className="hi hi-pin"></i>
            <i className="hi hi-preview"></i>
            <i className="hi hi-print"></i>
            <i className="hi hi-folder"></i>
            <i className="hi hi-receipt-o"></i>
            <i className="hi hi-history"></i>

            <i className="hi hi-reconcile"></i>
            <i className="hi hi-refresh"></i>
            <i className="hi hi-speech-bubble"></i>
            <i className="hi hi-copy"></i>
            <i className="hi hi-newsletter"></i>
            <i className="hi hi-tag"></i>
            <i className="hi hi-credit-card"></i>
            <i className="hi hi-headset"></i>
            <i className="hi hi-customize"></i>
            <i className="hi hi-delete"></i>
            <i className="hi hi-direct-deposit"></i>
            <i className="hi hi-download"></i>
            <i className="hi hi-draft"></i>
            <i className="hi hi-duplicate"></i>
            <i className="hi hi-edit"></i>
            <i className="hi hi-email"></i>
            <i className="hi hi-expert"></i>
            <i className="hi hi-save"></i>
            <i className="hi hi-search"></i>
            <i className="hi hi-send"></i>
            <i className="hi hi-settings-o"></i>
            <i className="hi hi-share"></i>
            <i className="hi hi-message"></i>
            <i className="hi hi-survey"></i>
            <i className="hi hi-thumb-up"></i>


            <i className="hi hi-thumb-down"></i>
            <i className="hi hi-lightbulb-o"></i>
            <i className="hi hi-checklist"></i>
            <i className="hi hi-pro-advisor"></i>
            <i className="hi hi-upload"></i>
            <i className="hi hi-export"></i>
            <i className="hi hi-star-o"></i>


            <i className="hi hi-announce"></i>
            <i className="hi hi-user"></i>
            <i className="hi hi-filter"></i>
            <i className="hi hi-flag"></i>
            <i className="hi hi-help-o"></i>
            <i className="hi hi-history"></i>
            <i className="hi hi-image"></i>
            <i className="hi hi-import"></i>
            <i className="hi hi-list"></i>

            <i className="hi hi-lock"></i>
            <i className="hi hi-map"></i>



            <i className="hi hi-pin"></i>
            <i className="hi hi-microphone"></i>
            <i className="hi hi-unlock"></i>
            <i className="hi hi-create"></i>

            <i className="hi hi-create-lg">hi-create-lg</i>
            <i className="hi hi-close"></i>
            <i className="hi hi-document"></i>
            <i className="hi hi-pop-out"></i>

            <i className="hi hi-pop-in"></i>
            <i className="hi hi-maximize"></i>
            <i className="hi hi-minimize"></i>
            <i className="hi hi-marketing-alt"></i>

            <i className="hi hi-adjust"></i>
            <i className="hi hi-unlink"></i>
            <i className="hi hi-play"></i>
            <i className="hi hi-document-alt"></i>

            <i className="hi hi-upgrade"></i>
            <i className="hi hi-chevron-left"></i>


            <i className="hi hi-chevron-right"></i>
            <i className="hi hi-chevron-up"></i>
            <i className="hi hi-chevron-down"></i>
            <i className="hi hi-mileage"></i>
            <i className="hi hi-new-window"></i>
            <i className="hi hi-circle-alert"></i>
            <i className="hi hi-circle-check"></i>
            <i className="hi hi-circle-info"></i>



            <i className="hi hi-tear-alert-rt"></i>
            <i className="hi hi-tear-alert-lt"></i>
            <i className="hi hi-tear-check-lt"></i>
            <i className="hi hi-tear-check-rt"></i>
            <i className="hi hi-drag"></i>
            <i className="hi hi-arrange"></i>
            <i className="hi hi-tear-pending"></i>
            <i className="hi hi-birthday"></i>
            <i className="hi hi-anniversary">anniversary</i>
            <i className="hi hi-no-access">no-access</i>
            <i className="hi hi-swap">swap</i>


            <i className="hi hi-pad"></i>

            <i className="hi hi-pad2"></i>
            <i className="hi hi-play">play</i>
            <i className="hi hi-test2"></i>
            <i className="hi hi-82"></i>
            <i className="hi hi-83"></i>
            <i className="hi hi-84"></i>

            <i className="hi hi-85"></i>
            <i className="hi hi-86"></i>
            <i className="hi hi-87"></i>
            <i className="hi hi-88"></i>
            <i className="hi hi-89"></i>
          </div>

          <Design/>


          <Row>
            <Col col="3"><Button color="primary">primary按钮</Button></Col>
            <Col col="3"><Button color="primary" disabled >DISABLE</Button></Col>
            <Col col="3"><Button>secondary按钮</Button></Col>
            <Col col="3"><Button disabled>secondary按钮</Button></Col>
          </Row>

          <Row>
            <Col col="3">
              <MenuButton color="primary" label="Create New">
                <div className="menu">
                  <div tabIndex="-1" className="menu-item">菜单按钮</div>
                  <div tabIndex="-1" className="menu-item">菜单按钮</div>
                </div>
              </MenuButton>
            </Col>
            <Col col="3"><MenuButton color="primary" disabled>primary菜单按钮</MenuButton></Col>
            <Col col="3"><MenuButton>菜单按钮</MenuButton></Col>
            <Col col="3"><MenuButton disabled>菜单按钮</MenuButton></Col>
          </Row>

          <h2>combo button</h2>
          <ComboButton>
            <Button onClick={e=> alert('save')}>Save</Button>
            <Button onClick={e=> alert('submit')}>Submit</Button>
            <Button onClick={e=> alert('cancel')}>Cancel</Button>
          </ComboButton>


          <h2>combo button primary</h2>
          <ComboButton color="primary" >
            <Button onClick={e=> alert('save')}>Save</Button>
            <Button onClick={e=> alert('submit')}>Submit</Button>
            <Button onClick={e=> alert('cancel')}>Cancel</Button>
          </ComboButton>


          <h2>combo link</h2>
          <ComboLink>
            <Button>Print</Button>
            <Button>Recieve Payment</Button>
            <Button>Print2</Button>
          </ComboLink>

          <h2>horizal form  no  label</h2>
          <Form   cols={3}  labelSpace={false} data={
          {
            username:"jackle",
            nation:["1","2"],
            time:'2016-07-18',
          }
          }>
            <FormInput  disabled name="username"　/>
            <FormSelect   disabled name="nation"  multiple  options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormSelect  name="nationa"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormDatePicker name="time" />
            <FormInput  disabled name="username"　/>
            <FormInput  disabled name="username"/>
            <FormDateRangerPicker required from="from" to="to" />
            <FormSelect  name="nationa"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormInput  disabled name="username"　/>
            <FormComboInput actionType= "select" actionName="curreny" name="amount"  options={[{text:'CNY',value:'CNY'},{text:'USD',value:'USD'}]}/>
          </Form>




          <h2>horizal form</h2>
          <Form horizontal  cols={3}  data={
          {
            username:"jackle",
            nation:["1","2"],
            time:'2016-07-18',
          }
          }>
            <FormInput  disabled name="username"　 label="Name"/>
            <FormSelect   disabled name="nation"  label="Nation" multiple  options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormSelect  name="nationa" label="Nation"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormDatePicker name="time"  label="Time"/>
            <FormInput  disabled name="username"　 label="Name"/>
            <FormInput  disabled name="username"　 label="Name"/>
            <FormDateRangerPicker required from="from" to="to" label="Time"/>
            <FormSelect  name="nationa"  label="Nation"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
            <FormInput  disabled name="username"　 label="Name"/>
            <FormComboInput actionType= "select" label="币种金额" actionName="curreny" name="amount"  options={[{text:'CNY',value:'CNY'},{text:'USD',value:'USD'}]}/>
          </Form>







          <h2> label  np space mode </h2>
          <Form className="row" labelSpace={false}>
            <FormInput />
            <FormInput/>
            <FormInput/>
            <FormInput/>
            <FormInput/>
            <FormTextArea/>
          </Form>


          <h2> default form mode </h2>
          <Form className="row">
             <FormInput 　 label="test1"/>
             <FormInput   label="test2"/>
             <FormInput   label="test3"/>
             <FormInput    label="test4"/>
            <FormInput  label="test5"/>
            <FormTextArea  label="test6"/>
          </Form>

          <div>
            <DataTable paganition dataSource={[
              {pservice:'pservice' ,description:'description',qty:'qty1' ,rate:'rate' ,amount:'amount',tax:'tax'},
              {pservice:'pservice' ,description:'description',qty:'qty3' ,rate:'rate' ,amount:'amount',tax:'tax'},
            ]}>
              <DataTable.ColumnDef    fixhead={true} hasCheck={true}/>
              <DataTable.ColumnDef    colname="pservice"   colLabel="PRODUCT/SERVICE"/>
              <DataTable.ColumnDef   colname="description"   colLabel="DESCRIPTION"/>
              <DataTable.ColumnDef   sortable={true} colname="qty" colLabel="QTY"   />
              <DataTable.ColumnDef   colname="rate" colLabel="RATE" />
              <DataTable.ColumnDef   colname="amount" colLabel="AMOUNT" />
              <DataTable.ColumnDef   colname="tax" colLabel="TAX"/>
              <DataTable.ColumnDef  fixtail={true}  hasAction={true}  render={
                (data)=>{
                  return (<span>
              <i className="hi hi-delete" onClick={
                (e)=>{
                  console.info('click',data);
                }
              }/>
              </span>)}
              }/>
            </DataTable>

          </div>


          <Pagination/>

          <Row>
            <Col col="2"><Switch label="开关"/></Col>
            <Col col="2"><UIRadioGroup sources={[ {id:'1',name:'R1'}, {id:'2',name:'R2'}]}/></Col>
            <Col col="2"><DateTimePicker/></Col>
            {/* </Col>*/}
            {/*<Col col="2"> </Col>*/}
          </Row>

          <Row>
            <Col col="4">
              <DropDown multiple defaultValue= {["1"] } options={ [{text:'a',value:'1'},{text:'b',value:'2'},{text:'c',value:'3'}] } />
            </Col>
          </Row>


          <Tabs>
            <Tabs.Section  titleText="ATab">A</Tabs.Section>
            <Tabs.Section titleText="BTab">B</Tabs.Section>
            <Tabs.Section titleText="CTab">C</Tabs.Section>
          </Tabs>



          <Tree showCheck={true} defaultSelected={[1]} data = {treeDataRepos.data} />


          <Tip/>
          <div><Step/><Flow/></div>
          </div>)
  }

  }



  import { connect } from 'react-redux';

  export default connect(
    ({treeDataRepos})=> ({treeDataRepos})
    ,{loadTreeData,treeShowCheck}
  )(TreeDemo)
