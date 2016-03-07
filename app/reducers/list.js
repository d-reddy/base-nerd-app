var C = require("../constants"),
    initialState = require("../initialstate");

module.exports = function(state,action){
  // sloppily copying the old state here, so we never mutate it
    var newstate = Object.assign({},state).list;
    switch(action.type){
        case C.LIST_THEM:
            newstate[action.item].counter += 1;
            return newstate;
        default: return state.list || initialState().list;
    }
};
