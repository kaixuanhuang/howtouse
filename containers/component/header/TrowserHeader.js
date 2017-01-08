/**
 * Created by huangsihuan on 2016/12/30.
 */

import './troswer.scss'
import React ,{PropTypes} from 'react'
import {Link} from 'react-router'
function TrowserHeader(props){

    let  {title} = props
    return(<header className="quick-style quick-header trowser">


        <div  className="icon-group pull-left trowser-left">

            <span className="action-square">
               <i className="hi hi-history"></i>
            </span>
            <label>{title}</label>
        </div>

        <div  className="icon-group pull-right">

            <span className="action-square">
               <i className="hi hi-settings"></i>
            </span>

            <span className="action-square">
               <i className="hi hi-help-o"></i>
            </span>

            <span className="action-square">
               <Link to="/howtouse"><i className="hi hi-close"/></Link>
            </span>
        </div>


    </header>)
}


TrowserHeader.propTypes = {
    title:PropTypes.string
}
export default TrowserHeader
