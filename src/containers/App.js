import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Card} from 'semantic-ui-react';
import Nav from '../components/Nav/index';
import BookCard from '../components/BookCard/index';
import {getBooks} from '../actions/booksActions';
import '../css/app.css';
import Filter from "./BookFilter";
import orderBy from 'lodash/orderBy';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const {books, isLoaded} = this.props;
    const bookItem = books.map((item, index) => <BookCard {...item} key={index}/>);

    return (
      <div className="container">
        <Container>
          <Nav/>
          <Filter />
          <Card.Group itemsPerRow={4}>
            {isLoaded ? bookItem : 'Loading...'}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = state => ({
  books: state.booksReducer.items && searchBooks(state.booksReducer.items, state.filterReducer.filterBy, state.filterReducer.searchQuery),
  isLoaded: state.booksReducer.isLoaded
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
