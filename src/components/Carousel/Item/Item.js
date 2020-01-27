import React, { useEffect } from 'react';
import './Item.scss';

const Item = (props) => {
  let compRef = React.createRef();
  const onKeyPressed = (e) => {
    const active = document.activeElement;
      if(e.keyCode === 39 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if(e.keyCode === 37 && active.previousSibling) {
        active.previousSibling.focus();
      }
      if(e.keyCode === 13) {
        props.clickItem(props.data);
      }
  }
  useEffect(() => {
    //moveFocus();
    if(props.isFocus){
      compRef.current.focus();
    }
  }, [compRef]);
  return <div tabIndex={props.index} ref={compRef} onKeyDown={(e) => onKeyPressed(e)} className="card" onClick={() => props.clickItem(props.data)}>
    <img src={props.data.images[0].url} className="cover" alt="Avatar" />
    <div className="container">
      <h4><b>{props.data.title}</b></h4>
    </div>
  </div>;
};

export default Item;
