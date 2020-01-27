import React from 'react';
import './Carousel.scss';
import Item from './Item';

const Carousel = (props) => {
  const items = props.data.map((x, i) => <Item key={i} data={x} clickItem={props.clickItem}></Item>);
  return (
  <div className="carousuel_container"><div className="carousel-content">
  {items.length > 0 ? items : props.emptyItemsText}
</div></div>);
};

export default Carousel;
