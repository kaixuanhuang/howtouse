/**
 * Created by huangsihuan on 2017/1/7.
 */
import React,{Component,PropTypes} from 'react'
import {List,ListGroup,ListItem} from 'HarmonyUI'
import {Link} from 'react-router'
class TaskList extends  Component{
    static defaultProps = {
        taskList :[{
            content:'3 overdue invoice',
            link:'sendremainer',
            action:'Send Remainder'
        },
            {
                content:'payrool taxes totaling $123.45 are due in 2 days',
                link:'paytax',
                action:'Pay Tax'
            }]
    }

    render(){
         return (
             <div style={{backgroundColor:'#fff',boxShadow: '0  3px 0 0 #DAE3EF'}} className="m-x-1 m-y-2 p-a-2">
                 <h2>Tasks</h2>
                 <List>
                     {
                         this.props.taskList.map((item,key)=> (<ListItem key={key}> {item.content}<Link to={item.link}>{item.action}</Link></ListItem>))
                     }
           </List></div>)
    }

}


export default TaskList