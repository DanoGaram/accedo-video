import React from 'react';
import './Item.scss';

const Item = (props) => {
  return <div className="card" onClick={() => props.clickItem(props.data)}>
    <img src={props.data.imageUrl} className="cover" alt="Avatar" />
    <div className="container">
      <h4><b>{props.data.title}</b></h4>
    </div>
  </div>;
};

export default Item;
