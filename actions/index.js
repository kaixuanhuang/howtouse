import * as ActionTypes from '../ActionTypes';
export function change() {
  
}




export function loadTreeData(query) {
  return {
    type: ActionTypes.LOAD_TREE_DATA,
    payload: {
      query
    }
  };
}

export function treeShowCheck(showCheck) {
  return {
    type: ActionTypes.TREE_SHOW_CHECK,
    payload: {
      showCheck
    }
  };
}

export function recieveData(data) {
  return {
    type:ActionTypes.RECIEVE_DATA,
    payload: {
      data
    }
  }
}
