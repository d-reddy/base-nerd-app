var React = require('react'),
    ptypes = React.PropTypes,
    Link = require("react-router").Link,
    ReactRedux = require("react-redux"),
    Item = require('./Item');

var List = React.createClass({
  propTypes: {
        items: ptypes.object.isRequired // will be provided by react-redux
    },
  render: function(){
      var mappedItems = this.props.items.map(function(itm) {
        return (
          <Item name={itm.name} key={itm.id}></Item>
        );
      });
      return (
        <div className="itemList">
          {mappedItems}
        </div>
      );
  }
});

var mapStateToProps = function(state){
    // This component will have access to `state.list` through `this.props.list`
    return {items:state.list};
};

module.exports = ReactRedux.connect(mapStateToProps)(List);
