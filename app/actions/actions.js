var constants = require("../constants");

module.exports = {
    reset: function(){
        // A normal action creator, returns a simple object describing the action.
        return {type:constants.TEST};
    },
    list_them: function(item){
        // here we take advantage of Redux-thunk; instead of returning an object describing an action,
        // we return a function that takes dispatch and getState as arguments. This function can then
        // invoke dispatch, now or later using setTimeout or similar.
        return function(dispatch,getState){
            dispatch({type:constants.LIST_THEM, item:item});
            setTimeout(function(){
                dispatch({type:constants.TEST_IT,item: item});
            },2000);
        }
    }
};
