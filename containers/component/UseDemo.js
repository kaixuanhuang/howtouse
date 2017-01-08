/**
 * Created by huangsihuan on 2016/12/31.
 */
import React,{Component,PropTypes} from 'react'
import {UIHeader} from './header'
import {SideNav,Menu,MenuItem,MenuHub,SubMenu,Drawer,Panel,Form,FormInput,FormRadioGroup ,Col,FormTextArea,Button} from 'HarmonyUI'
import { Link } from 'react-router';
import { connect } from 'react-redux';


class  UseDemo extends Component{
    state = {
        formdata:{
            baseInfo:{},
            note:''
        }
    }
    render(){
      let {children} = this.props

      return (<div className="app-content" style={{margin:0}}>

             <div className="col-3" style={{height:'100%'}}>

                 <SideNav style={{height:'100%'}}>
                     <Menu>
                         <MenuHub>
                         <MenuItem><Link to="/howtouse/accountant">Account</Link></MenuItem>
                         <SubMenu>
                             <MenuItem><Link to="demo/home">a</Link></MenuItem>
                             <MenuItem><Link to="demo/home">a</Link></MenuItem>
                             <MenuItem><Link to="/accountant/companyTemp">company template</Link></MenuItem>
                         </SubMenu>
                         </MenuHub>
                         <MenuItem><Link to="/howtouse/home">Home</Link></MenuItem>
                         <MenuItem><Link to="/howtouse/customer">Customer</Link></MenuItem>

                         <MenuHub>
                         <MenuItem><Link to="/howtouse/transition">Transition</Link></MenuItem>
                         <SubMenu>
                             <MenuItem><Link to="demo/home">a</Link></MenuItem>
                             <MenuItem><Link to="demo/home">a</Link></MenuItem>
                             <MenuItem><Link to="/transition/sales">Sales</Link></MenuItem>
                         </SubMenu>
                         </MenuHub>
                         <MenuItem><Link to="demo/home">主页</Link></MenuItem>
                         <MenuItem><Link to="demo/home">主页</Link></MenuItem>
                         <MenuItem><Link to="demo/home">主页</Link></MenuItem>
                         <MenuItem><Link to="/demodocs">组件展示</Link></MenuItem>
                     </Menu>
                 </SideNav>

             </div>
             <div className="col-9" style={{height:'100%'}} >
                 <div style={{height:'5%'}}>
                 <UIHeader />
                 </div>
                 <div style={{height:'95%'}}>
                     {children}
                 </div>
             </div>


         </div>)
    }
}


export default UseDemo
