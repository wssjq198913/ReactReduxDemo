import { call, put, take } from 'redux-saga/effects'
import fetchRequest from '../helpers/fetchHelper';
import * as questionnaireAction from '../actions/questionnaire';


export function* loadAsync() {
    try {
        let result = yield call(fetchRequest, '/loadQuestionnaire', 'POST');
        yield put(questionnaireAction.loadSucceed(result))
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchLoadAsync() {
    while (true) {
        const { history } = yield take(questionnaireAction.LOAD);
        yield call(loadAsync, history);
    }
}

