var React = require('react'),
    ptypes = React.PropTypes,
    Link = require("react-router").Link,
    ReactRedux = require("react-redux");

module.exports = React.createClass({
  propTypes: {
        // will be provided by react-router (example /blah?name=somename)
        //params: ptypes.shape({name:ptypes.string.isRequired}).isRequired,
        name: ptypes.object.isRequired // will be provided by react-redux
    },
  render: function(){
    return (
      <div>
          <h1>{name}</h1>
      </div>
    )
  }
});
