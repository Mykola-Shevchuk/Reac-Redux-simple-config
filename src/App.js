import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Card} from 'semantic-ui-react';
import Nav from './components/Nav/';
import BookCard from './components/BookCard/';
import {getBooks} from './actions/booksActions';
import './css/app.css';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const {books, isLoaded} = this.props;
    const bookItem = books.map((item, index) => <BookCard {...item} key={index} />);

    return (
      <div className="container">
        <Container>
          <Nav />
          <Card.Group itemsPerRow={4}>
            {isLoaded ? bookItem : 'Loading...'}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.items,
  isLoaded: state.booksReducer.isLoaded
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
