import React ,{Component,PropTypes} from 'react'
import MoneyBar from '../moneybar/MoneyBar'
import {Tabs,SplitView,List,ListGroup,ListItem,Stage,Button,Image} from 'HarmonyUI'
import groupBy from 'lodash/groupBy'
import keys from 'lodash/keys'
import startsWith from 'lodash/startsWith'
function CompanyTemp(props){
  const data = [
    {tn:'asdf',used:'3'},
    {tn:'axx',used:'3'},
    {tn:'Bgfd',used:'3'},
    {tn:'Bxfd',used:'3'},
    {tn:'Bffdgd',used:'3'},
    {tn:'Agdsafd',used:'3'},
    {tn:'Bgdsafd',used:'3'},
    {tn:'Bgfdxfd',used:'3'},
    {tn:'Bffhgdhdgd',used:'3'},
    {tn:'Agjgfdjfd',used:'2'},
    {tn:'Bjgfdjgfd',used:'3'},
    {tn:'Bjgdjxhgfd',used:'3'},
    {tn:'Bffjgfdktdgd',used:'3'},
  ]

  let newData = groupBy(data,(v)=>v.tn.substring(0,1).toUpperCase())
  const  listToItem = (list,index)=>{
    return (<ListItem key={index}>
            <span>{list.tn}</span><br/>
            <span>{`used by ${list.used} others`}</span><br/>
          </ListItem>)
  }

  return (<SplitView grid="3 7" style={{height: '100%'}}>
           <SplitView.Left >
            <Tabs defaultActive={1}>
              <Tabs.Section titleText="My Template"> C1  </Tabs.Section>
              <Tabs.Section titleText="Public" >
              <List>
                 {Object.keys(newData)
                   .map(key=>
                     (<ListGroup key={key} group={key}>
                       {newData[key] && newData[key].map(listToItem) }
                    </ListGroup>)
                  )}
              </List>
              </Tabs.Section>
            </Tabs>
            </SplitView.Left>
            <SplitView.Right>
              <Stage stageheader={(
                <div>
                <div style={{float:'right'}}>
                <Button> <i style={{paddingRight:'5px'}} className="hi hi-create primary-text"/><span>Add to Template</span></Button>
                </div>
                <h1>Template</h1>

                </div>
              )}>

                <div className="pull-left" style={{textAlign: 'center'}}>
                  <Image label="avantar" src="../avantar.png" width="100px" avatar/>
                  <p>Shared By</p>
                  <strong>Avantar</strong>
                </div>
                <div className="pull-right">
                <MoneyBar/>
                </div>
              </Stage>

              <div className="m-t-1">
              <Tabs>
                <Tabs.Section icon="expenses" titleText="Chart of accounts">A</Tabs.Section>
                <Tabs.Section icon="products" titleText="Products and services">B</Tabs.Section>
                <Tabs.Section icon="settings-o" titleText="Company Setting">C</Tabs.Section>
              </Tabs>
              </div>
            </SplitView.Right>
          </SplitView>)
}
export default CompanyTemp
