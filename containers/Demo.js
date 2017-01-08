
import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router';
import {Stage,DateTimePicker,Tree,Switch,Button,MenuButton,ComboButton,ComboLink,
    UIRadioGroup,DropDown,Tabs,Row,Col,Pagination,Form,FormInput,FormTextArea,FormSelect,FormDatePicker,Modal,
    Message,ComboInput,FormComboInput,Menu,MenuItem,MenuHub,SubMenu,SideNav
  } from 'HarmonyUI'
import find from 'lodash/find'
import get from 'lodash/get'

//const  links = ['table' ,'tree' ,'form']
class Demo extends Component{

  state = {
      modalOpen:false,
      model: {
          name:'jacke'
      },
      entities:[
        {id:'1',info:{name:'fi-icon',link:'/components/icon'}},
        {id:'2',info:{name:'badge',link:'/components/badge'}},
        {id:'11',info:{name:'step',link:'step'}},
        {id:'12',info:{name:'12',link:'/components/badge'}},
          {id:'81',info:{name:'comboInput',link:'/components/combo'}},
      ],
      items : [
          {name:'fonticon',link:'/components/fonticon',sub:['1','2']},
          {name:'Tip',link:'/components/tip'},
          {name:'Visual Design',link:'/components/design'},
          {name:'Interaction Frameworks',link:'/components/Frameworks'},
          {name:'Layouts',link:'/components/layouts'},
          {name:'Navigation',link:'/components/Navigation'},
          {name:'Content & Date',link:'/components/content&data'},
          {name:'Communication',link:'/components/form',sub:['11','12']},
          {name:'Forms & control',link:'/components/from',sub:['81']},
          {name:'Discovery',link:'/components/button'},
          {name:'DataTable',link:'/components/datatable'},
          {name:'How to Use',link:'/howtouse'}
      ]

  }

   render(){
        let {items} = this.state
        return (<div className="row" style={{margin:0}}>

                <div className="col-3">
                <SideNav>
                <Menu>
                  {
                    items.map(item=>

                      (
                        <MenuHub   item={item} key={item.name}>
                        <MenuItem>
                             <Link to={`${item.link}`}>{item.name}</Link>
                        </MenuItem>
                        {
                          (item.sub && item.sub.length)　&&
                          (<SubMenu>
                            {
                               item.sub.map(subid=> {

                                  return get(find(this.state.entities,e=>e.id === subid),'info')

                                }).map(subitem=>(<MenuItem key={subitem.name}>
                                        <Link to={`/components/${subitem.link}`}>{subitem.name}</Link>
                                      </MenuItem>)
                                )
                            }

                         </SubMenu>)
                       }
                         </MenuHub>
                      )
                    )

                  }
               </Menu>
                </SideNav>
                </div>
                <div className="col-9">
                    {this.props.children}
                </div>
          </div>)
   }

}



  import { connect } from 'react-redux'

  export default connect(
    ({p})=> ({...p})
    ,{}
  )(Demo)
