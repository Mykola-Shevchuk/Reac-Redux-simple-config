import React from 'react';
import {Input, Menu} from 'semantic-ui-react'
import {filterTypes} from '../../helpers/';

const FilterView = ({filterBooks, searchBooks}) => {
  const {all, authorName, priceHigh, priceLow, popular} = filterTypes;
  
  return (
    <div className="filter">
      <Menu pointing>
        <Menu.Item name='all' onClick={filterBooks.bind(this, all)}/>
        <Menu.Item name='Price High' onClick={filterBooks.bind(this, priceHigh)}/>
        <Menu.Item name='Price low' onClick={filterBooks.bind(this, priceLow)}/>
        <Menu.Item name='Popular' onClick={filterBooks.bind(this, popular)}/>
        <Menu.Item name='Author' onClick={filterBooks.bind(this, authorName)}/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' onChange={e => searchBooks(e.target.value)} placeholder='Search...'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );

};

export default FilterView;