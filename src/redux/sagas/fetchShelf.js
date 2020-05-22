import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//aexios GET request shelf data
function* getShelf() {

    console.log('------->in getShelf');
    try {
        const response = yield axios.get('/api/shelf');
        console.log('------>getShelf RESPONSE', response.data)
        yield put({
            type: 'GET_SHELF',
            payload: response.data
        })
    }
    catch (error) {
        console.log('Error in getShelf:', error)
    }
};//end getShelf

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
}

export default shelfSaga;