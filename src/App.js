import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './actions/booksActions';

class App extends Component {
  handleCheck = () => {
    this.props.getBooks();
  };
  
  render() {
    return (
      <div className="container">
        <button onClick={this.handleCheck}>Сlick</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
