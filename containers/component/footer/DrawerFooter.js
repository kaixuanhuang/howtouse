/**
 * Created by huangsihuan on 2017/1/6.
 */

import React ,{PropTypes} from 'react'
import {Link} from 'react-router'
import {Button} from 'HarmonyUI'
function DrawerFooter(props){

    let  {children} = props
    return(<footer  className="drawer-footer">
            <div style={{paddingRight: '15px'}}>
                {children}
             </div>
    </footer>)
}


DrawerFooter.propTypes = {
    title:PropTypes.string
}
export default DrawerFooter
