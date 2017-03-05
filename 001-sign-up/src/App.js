import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Input = React.createClass({
  render: function() {
    return (
      <div className="Input">
        <input
          id={this.props.name}
          autoComplete="false"
          required
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label htmlFor={this.props.name} />
      </div>
    );
  }
});

const Modal = React.createClass({
  render: function() {
    return (
      <div className="Modal">
        <form onSubmit={this.props.onSubmit} className="ModalForm">
          <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
          <Input
            id="username"
            type="email"
            placeholder="mrjackolai@gmail.com"
          />
          <Input id="password" type="password" placeholder="password" />
          <button>
            Log in <i className="fa fa-fw fa-chevron-right" />
          </button>
        </form>
      </div>
    );
  }
});

const App = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },

  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  handleSubmit: function(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  },

  render: function() {
    let child;

    if (this.state.mounted) {
      child = <Modal onSubmit={this.handleSubmit} />;
    }

    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default App;
