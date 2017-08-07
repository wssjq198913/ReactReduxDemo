import { call, put, take } from 'redux-saga/effects'
import fetchRequest from '../helpers/fetchHelper';
import * as startAction from '../actions/start';


export function* proceedAsync(history) {
    try {
        let result = yield call(fetchRequest, '/login', 'POST');
        yield put(startAction.proceedSucceed(result))
        
        // react-router-redux is not compatible with react-router V4
        // we need to use history to handle navigation.
        yield call(history.push, '/questionnaire');
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchProceedAsync() {
    while (true) {
        const { history } = yield take(startAction.PROCEED);
        yield call(proceedAsync, history);
    }
}

