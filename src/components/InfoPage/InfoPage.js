import React from 'react';
import { connect } from 'react-redux';
import AddPage from './AddPage';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
//BUT WE NEED TO CONNECT to display our shelf items.

const deleteItem = (id, props) => {
  console.log('in deleteItem', id);
  props.dispatch({
    type: 'DELETE_ITEM',
    payload: id
  })
};//end deleteItem

const InfoPage = (props) => (

    <div>
      <h1>Shelf Page</h1>
        <AddPage />
    <div>
        {props.reduxState.getShelf.map((shelf, index) => {
          return (<div key={index}><img src={shelf.image_url} alt="" width={250} /> <br /> {shelf.description} 
          <button onClick={() => deleteItem(shelf.id, props)}>Delete</button></div>)
        })}
      </div>
    </div>
);

const putPropsOnRedux = reduxState => ({ reduxState });
export default connect(putPropsOnRedux)(InfoPage);