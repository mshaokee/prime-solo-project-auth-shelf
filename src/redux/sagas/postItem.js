import axios from 'axios';
import { takeLatest, put} from 'redux-saga/effects';

//addshelf SAGA
function* addShelf(action) {
    let url = action.payload.url;
    let description = action.payload.description;
    // console.log('--------in addShelf', url, description);
    try {
        yield axios.post('/api/shelf', { url: url, description: description })
        //refresh
        yield put({
            type: 'FETCH_SHELF'
        })
    }
    catch (err) {
        console.log(err);
    };//end catch
};//end addShelf


//initial saga
function* addSaga() {
    yield takeLatest('POST_ITEM', addShelf)
};//end addSaga

export default addSaga;