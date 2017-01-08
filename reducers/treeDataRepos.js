import * as ActionTypes from '../ActionTypes';



export default function treeDataRepos(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_TREE_DATA:

      return Object.assign({}, state, {
        [action.payload.query]: 'tree'
      })

      case ActionTypes.RECIEVE_DATA:
       return {...state,'data':action.payload.data}

    case ActionTypes.TREE_SHOW_CHECK:
      return {...state,'showCheck':action.payload.showCheck}

    default:
      return state;
  }
}
