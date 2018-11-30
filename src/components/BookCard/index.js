import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = (props) => {
    const {image, title, author, price} = props;
    
    return (
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>{author}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <a>
            <Icon name='usd' />
            {price}
          </a>
        </Card.Content>
      </Card>
    );
  };

export default BookCard;