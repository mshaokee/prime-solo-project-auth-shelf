import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//axios GET request shelf data
function* getShelf() {
    console.log('------->in getShelf');
    try {
        const response = yield axios.get('/api/shelf');
        yield put({
            type: 'GET_SHELF',
            payload: response.data
        })
    }
    catch (error) {
        console.log('Error in getShelf:', error)
    }
};//end getShelf



export default getShelf;