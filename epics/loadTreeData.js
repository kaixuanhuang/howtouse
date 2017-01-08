import { ajax } from 'rxjs/observable/dom/ajax'
import { from } from 'rxjs/observable/from'
import * as ActionTypes from '../ActionTypes'
import { loadTreeData ,recieveData} from '../actions'



const treedata  =[
     {
        pid:null,
        id:1,
        name:'康梁',
        children:[
        {pid:1,
           id:11,
           name:'锤子镰刀'
         },
         {pid:1,
          id:12,
          name:'三民主义',
          open:true,
          children:[
           {
             pid:12,
             id:121,
             name:'哈哈哈哈',
             children:[{
                 pid:121,
                 id:1211,
                 name:'大大大'
             }, {
                 pid: 121,
                 id: 1212,
                 name: '小小小'
             }]
           },
              {
                  pid:12,
                  id:122,
                  name:'呵呵呵和'
              }]
          }]
       },
       // {
       //   pid:null,
       //   id:2,
       //   name:'孙黄',
       // }

     ]  ;
export default function fetchRepos(action$) {
  return action$.ofType(ActionTypes.LOAD_TREE_DATA)
    .map(action => action.payload.query)
    .switchMap(type =>  {
      return    from(treedata)
                .toArray()
                .map(recieveData)  //loadTreeData.bind(null, user)
    });
}
