var C = require("../constants"),
    initialState = require("../initialstate");

//deals with test reducing
module.exports = function(state,action){
  // sloppily copying the old state here, so we never mutate it
    var newstate = Object.assign({},state).test;
    switch(action.type){
        case C.TEST_IT:
            newstate.test.value = action.value;
            return newstate;
        default: return state.test || initialState().test;
    }
};
