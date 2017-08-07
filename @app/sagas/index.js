import { fork } from 'redux-saga/effects'
import { watchProceedAsync } from './start.js';
import { watchLoadAsync } from './questionnaire.js';

export default function* rootSaga() {
    yield [
        fork(watchProceedAsync),
        fork(watchLoadAsync)
    ];
}