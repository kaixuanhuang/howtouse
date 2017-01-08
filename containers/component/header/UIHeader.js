/**
 * Created by huangsihuan on 2016/12/29.
 */
import './header.scss'
import React from 'react'
import {PopUp,Menu,MenuItem,Tip,ComboInput} from 'HarmonyUI'
import { Link } from 'react-router';



function UIHeader(props){


    console.info(PopUp)
    return(<header className="quick-header">


    <Menu direction="inline" preClx = "quick-header">
      <MenuItem>
         <i className="hi hi-settings"/>
         <span className="setting-clips">company</span>
      </MenuItem>
      <MenuItem>

         <PopUp trigger={<i className="hi hi-help-o"/>} on="hover"
            closeOnTriggerMouseLeave={false}
            positioning="bottom left" offset={180} gutter={10}>
           <PopUp.Content>
            <Tip color="secondary" closeabled/>
           </PopUp.Content>
          </PopUp>


          <PopUp trigger={ <span>Help</span>} on="click"
                 positioning="bottom left" offset={400} gutter={10}>
              <PopUp.Content>
                      <Tip color="primary">
                            <div className="card" style={{    width: '400px'}}>
                                <ComboInput icon="search" placeholder="what do you need help with"/>
                                <label > Top Help </label>
                                <div className="divider" style={{borderBottom:'3px solid #f0f0f0'}}/>
                                <div style={{padding:'15px 0'}}>
                                    <a>help list</a>
                                 </div>
                                <div style={{padding:'15px 0'}}>
                                    <a>help list</a>
                                </div>
                                <div style={{padding:'15px 0'}}>
                                    <a>help list</a>
                                </div>
                                <div style={{padding:'15px 0'}}>
                                    <a>help list</a>
                                </div>
                                <div className="divider" style={{borderBottom:'3px solid #f0f0f0'}}/>
                                <div>
                                        <i  className="hi hi-help pull left"/>
                                        <label>need more help</label>
                                        <a>contact us</a>
                                 </div>
                                <div className="divider" style={{borderBottom:'3px solid #f0f0f0'}}/>

                            </div>
                      </Tip>

              </PopUp.Content>
          </PopUp>

      </MenuItem>
    </Menu>

        <div  className="icon-group">


                 <PopUp
                     trigger={
                         (<span className="action-square">
                             <i className="hi hi-settings"/>
                         </span>)
                     }
                     on="click">

                     <PopUp.Content>
                         <Tip color="primary">

                          </Tip>
                     </PopUp.Content>
                 </PopUp>



                 <PopUp
                     trigger={
                         (<span  tabIndex="-1" className="action-square action-create">
                             <i className="hi hi-create-lg"/>
                             </span>)
                     }
                     positioning="bottom left" offset={150} gutter={10}
                     on="click">

                     <PopUp.Content>
                         <Tip color="primary" title={"create"}>

                               <Menu textAlign="center">
                                   <MenuItem><Link to="/create/invoice">Invoice</Link></MenuItem>
                                   <MenuItem><Link to="/create/payment">Payment</Link></MenuItem>
                                   <MenuItem>C</MenuItem>
                                   <MenuItem>D</MenuItem>
                                 </Menu>
                                 <label> see more</label>
                          </Tip>
                     </PopUp.Content>
                 </PopUp>


            <span className="action-square">
              <i className="hi hi-history"></i>
            </span>
            </div>


    </header>)
}

export default UIHeader
