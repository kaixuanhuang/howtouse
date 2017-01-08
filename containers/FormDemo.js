
import {Stage,DateTimePicker,Tree,Switch,Button,MenuButton,ComboButton,ComboLink,
    UIRadioGroup,DropDown,Tabs,Row,Col,Pagination,Form,FormInput,FormTextArea,FormSelect,FormDatePicker,Modal,
    Message,ComboInput,FormComboInput,Menu,MenuItem,SideNav
  } from 'HarmonyUI'
import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router';



class FormDemo extends Component{

  componentWillMount(){
    debugger
     Message.alert('text','content1')
     Message.alert('text','content2')

     setTimeout(()=>  Message.alert('text','alert') ,3000)
  }
  state = {
      modalOpen:false,
      model: {
          name:'jacke'
      },
      items : [
        {name:'Button',link:'/demo/button'},
        {name:'Form',link:'/demo/form'}
      ]

  }

  render(){
    let {treeDataRepos} = this.props

    let {items} = this.state
    return (
        <div className="row">

            <div className="col-3">
            <SideNav>
            <Menu>
              {
                items.map(item=>(<MenuItem><Link to={item.link}>{item.name}</Link></MenuItem>))
              }
            </Menu>
            </SideNav>
            </div>

            <div className="col-9">
            <Modal open={this.state.modalOpen}
                actions={(<Button role="close">Close</Button>)}
                content = {<p>(Important! You have not entered tax payments created prior to using our payroll service. It’s important to reconcile the taxes you have paid with the taxes your company accrued so that your year-end forms will be correct. Enter ths information now and resolve any discrepancies.)</p>    }
                >
            </Modal>




          <Form horizontal cols={2} data={
              {
                  username:"jackle",
                  nation:["1","2"],
                   time:'2016-07-18',
              }
          }>
             <FormInput  disabled name="username"　size="lg" label="Name"/>
             <FormSelect   disabled name="nation" size="lg" label="Nation" multiple  options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
             <FormSelect  name="nationa" size="lg" label="Nation"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
              <FormDatePicker name="time" size="lg" label="Time"/>
              <FormInput  disabled name="username"　size="lg" label="Name"/>
              <FormInput  disabled name="username"　size="lg" label="Name"/>
              <FormDatePicker  size="lg" from="from" to="to" label="Time" range/>
              <FormSelect  name="nationa" size="lg" label="Nation"    options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
              <FormInput  disabled name="username"　size="lg" label="Name"/>
              <FormComboInput label="币种金额" size="lg" actionName="curreny" name="amount"  options={[{text:'CNY',value:'CNY'},{text:'USD',value:'USD'}]}/>
          </Form>

         <DropDown options={ [{text:'China',value:'1'},{text:'American',value:'2'},{text:'Japan',value:'3'}] }/>
         <DateTimePicker/>



            <Button color="primary" onClick={ ()=>{this.setState({modalOpen:true})}}>打开对话框</Button>

            <Menu>
              <MenuItem>a</MenuItem>
              <MenuItem>a</MenuItem>
              <MenuItem>a</MenuItem>
              <Menu>
                <MenuItem>a</MenuItem>
                <MenuItem>a</MenuItem>
                <MenuItem>a</MenuItem>
              </Menu>
            </Menu>
                  </div>
          </div>)
  }

  }



  import { connect } from 'react-redux';

  export default connect(
    (p)=> ({...p})
    ,{}
  )(FormDemo)
