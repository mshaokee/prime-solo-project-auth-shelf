import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

//generator function
function* deleteItem(action){
    console.log('------>in deleteItem', action.payload);
    let id = action.payload;
    try{
        yield axios.delete(`/api/shelf/${id}`);
        yield put ({type: 'FETCH_SHELF'})
    }catch(err){
        console.log(err)
    };//end catch
};//end deleteItem generator


//root saga
function* watcherSaga(){
    console.log('watcher saga')
    yield takeLatest ('DELETE_ITEM', deleteItem);
};//end watcherSaga

export default watcherSaga;