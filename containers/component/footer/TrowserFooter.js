/**
 * Created by huangsihuan on 2017/1/2.
 */
/**
 * Created by huangsihuan on 2016/12/30.
 */
import './trowserfooter.scss'
import React ,{PropTypes} from 'react'
import {Link} from 'react-router'
import {ComboButton,Button} from 'HarmonyUI'
function TrowserFooter(props){

    let  {title} = props
    return(<footer  className="trowser-footer trowser">
        <div className="pull-right">
          <ComboButton color="primary" >
              <Button onClick={e=> alert('save')}>Save</Button>
              <Button onClick={e=> alert('submit')}>Submit</Button>
              <Button onClick={e=> alert('cancel')}>Cancel</Button>
          </ComboButton>
        </div>
    </footer>)
}


TrowserFooter.propTypes = {
    title:PropTypes.string
}
export default TrowserFooter

