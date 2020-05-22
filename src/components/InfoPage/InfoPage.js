import React from 'react';
import { connect } from 'react-redux';
import AddPage from './AddPage';
import { useState } from 'react';

const deleteItem = (id, props) => {
  console.log('in deleteItem', id);
  props.dispatch({
    type: 'DELETE_ITEM',
    payload: id
  })
};//end deleteItem

const editItem = (description, url, props) => {
  console.log('in editItem');

  props.dispatch({
    type: 'EDIT_ITEM',
    payload: {
      description: description,
      url: url
    }
  })
};//end edit item

//BEGIN MAIN FUNCTION COMPONENT
const InfoPage = (props) => {

  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  // console.log('SHOW DESCRIPTION AND URL CHANGE', description, url);

  return (
    <div>
      <h1>Shelf Page</h1>
      <AddPage />
      <div>
        {props.reduxState.getShelf.map((shelf, index) => {
          return (
            <div className="item" key={index}>
              {shelf.description}
              <br />
              <img src={shelf.image_url} alt="" width={250} />
              <br />
              <input name="description" placeholder="DESCRIPTION" onChange={(event) => setDescription(event.target.value)} />
              <input name="url" placeholder="URL" onChange={(event) => setUrl(event.target.value)} />
              <br />

              <button onClick={() => deleteItem(shelf.id, props)}>Delete</button>
              <button onClick={() => editItem(description, url, props)}>Make Changes</button>
            </div>
          );
        })}
      </div>
    </div>
  )
};

const putPropsOnRedux = reduxState => ({ reduxState });
export default connect(putPropsOnRedux)(InfoPage);