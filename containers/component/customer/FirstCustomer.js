import React ,{Component,PropTypes} from 'react'
import {Stage,Form,FormInput,FormSelect,Button,Col,Image} from 'HarmonyUI'
import {addCustomer} from '../../../actions/customer'
class FirstCustomer extends Component{



    addCustomer = ()=>{
        let  formdata = this.refs.addcustomer.getFormdata()
        debugger
        this.props.addCustomer(formdata)
    }


    render(){
        return (<div>
                <Stage stageheader={(<label>Customer</label>)} collapse={false}></Stage>
                <div className="p-x-5">
                    <div className="text-align-center">
                        <Image src={"../add_customer.png"}  />

                    </div>
                    <h2 className="text-align-center  m-y-0"> Add your first Customer </h2>
                    <label className="m-y-1 p-l-1"> 请添加你的客户 这样在invoice会自动填充此客户</label>
                    <Form cols={2} ref="addcustomer">
                        <FormInput name="firstname" placeholder="First name"/>
                        <FormInput name="lastname" placeholder="Last name"/>
                        <FormInput name="displayname" placeholder="Display name" required/>
                        <Col padX="0">
                            <FormInput name="phone" col="6" placeholder="Phone"/>
                            <FormInput name="email" col="6" placeholder="Email"/>
                        </Col>
                        <FormInput name="xxx"  placeholder="XXX"/>
                        <FormInput name="city" placeholder="City"/>
                        <Col padX="0">
                            <FormInput name="state" col="8" placeholder="State"/>
                            <FormInput name="zip" col="4" placeholder="Zip"/>
                        </Col>
                        <FormSelect  name="country" placeholder="Unit State"/>
                        <Col col="12" align="center">
                            <Button color="primary" onClick={this.addCustomer}>Add Customer </Button>
                        </Col>
                    </Form>
                </div>
            </div>

        )
    }

}


import {connect} from 'react-redux'

export default connect(
    ({customerRepos})=> ({customerRepos})
    ,{addCustomer}
)(FirstCustomer)
