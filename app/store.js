var Redux = require("redux"),
    listReducer = require("./reducers/list"),
    testReducer = require("./reducers/test"),
    initialState = require("./initialstate"),
    thunk = require('redux-thunk'); // allows us to use asynchronous actions

var rootReducer = Redux.combineReducers({
    list: listReducer,   // this means listReducer will operate on appState.list
    test: testReducer // testReducer will operate on appState.test,
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer,initialState());
