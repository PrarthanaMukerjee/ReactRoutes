var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory,Route,Router,IndexRoute} = require('react-router');
var NavBar = require('./Components/Navbar');
var Home = require('./Components/Home');
var About = require('./Components/About');
var Contact = require('./Components/Contact');

var Maincomponent = React.createClass({

  render:function(){
    return (
    <div>
    <NavBar />
    <br/><br/>
    {this.props.children}
    </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={Maincomponent} >
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} /></Route>
  </Router>,
 document.getElementById('app'));
