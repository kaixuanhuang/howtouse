import './component/style.scss'

import React from 'react'
import  ReactDOM  from 'react-dom'
import {Button,Input,FormInput,DateTimePicker,UISelect,Popup,DataTable,UICheckBox,UIRadioGroup} from 'HarmonyUI'


let sources = [{id:'1',name:'test'}  ,{id:'2',name:'test2'}]

export default function App({ children }) {
  return (
    <div className="app">
     {children}
         </div>)
}
