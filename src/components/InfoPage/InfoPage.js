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

const editItem = (id, description, url, props, originalDes, originalUrl) => {
  console.log('Make Changes Clicked');
  if (description === ''){
    description = originalDes;
  }
  if(url === ''){
    url = originalUrl
  }
  // console.log ('Payload is:',description, url)
  props.dispatch({
    type: 'EDIT_ITEM',
    payload: {
      id,
      description,
      url
    }
  })
};//end edit item

//BEGIN MAIN FUNCTION COMPONENT
const InfoPage = (props) => {
  console.log('User is', props.reduxState.user.id);
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

              {props.reduxState.user.id && (
                <>
                  <input defaultValue={shelf.description} name="description" placeholder="DESCRIPTION" onChange={(event) => setDescription(event.target.value)} />
                  <input defaultValue={shelf.image_url} name="url" placeholder="URL" onChange={(event) => setUrl(event.target.value)} />
                  <br />
                  <button onClick={() => deleteItem(shelf.id, props)}>Delete</button>
                  <button onClick={() => editItem(shelf.id, description, url, props, shelf.description, shelf.image_url)}>Make Changes</button>
                </>
              )}
          
            </div>
          );
        })}
      </div>
    </div>
  )
};

const putPropsOnRedux = reduxState => ({ reduxState });
export default connect(putPropsOnRedux)(InfoPage);