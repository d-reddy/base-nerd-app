var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


var routes = (
  <Route name="app" path="/" handler={require('./component/app')}>
    <DefaultRoute handler={require('./components/list')} />
    <Route name="list" handler={require('./components/list')} />
  </Route>
);

module.exports = routes;
