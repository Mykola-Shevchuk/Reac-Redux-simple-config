import React from 'react';
import {Menu} from 'semantic-ui-react';
import './nav-top.css';

const Nav = () => (
  <Menu className='nav-top'>
    <Menu.Item name='browse'>
      Books Shop
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup'>
        Sum: 0$
      </Menu.Item>

      <Menu.Item name='help'>
        Cart (0)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Nav;