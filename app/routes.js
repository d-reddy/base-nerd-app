var React = require('react');

var List = require('./components/List')

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" component={List}>
    <DefaultRoute component={List} />
    <Route name="list" component={List} />
  </Route>
);

module.exports = routes;
