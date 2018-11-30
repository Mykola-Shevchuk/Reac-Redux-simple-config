import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Card} from 'semantic-ui-react';
import Nav from '../components/Nav/index';
import BookCard from '../components/BookCard/index';
import {getBooks} from '../actions/booksActions';
import '../css/app.css';
import Filter from "./BookFilter";
import orderBy from 'lodash/orderBy';
import {filterTypes, dataTypes} from '../helpers/';

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
          <Card.Group itemsPerRow={3}>
            {isLoaded ? bookItem : 'Loading...'}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const sortBy = (books, filterBy) => {
  const {all, authorName, priceHigh, priceLow, popular} = filterTypes;
  const {author, price, rating} = dataTypes;

  switch (filterBy) {
    case all:
      return books;
    case authorName:
      return orderBy(books, author, 'asc');
    case priceHigh:
      return orderBy(books, price, 'asc');
    case priceLow:
      return orderBy(books, price, 'desc');
    case popular:
      return orderBy(books, rating);
    default:
      return books;
  }
};

const mapStateToProps = state => ({
  books: sortBy(state.booksReducer.items, state.filterReducer.filterBy),
  isLoaded: state.booksReducer.isLoaded
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
