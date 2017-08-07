import * as questionnaireAction from '../actions/questionnaire';

const initialState = {
    isFetching: false
};

export default function questionnaireReducer(state = initialState, action = {}) {
    switch (action.type) {
        case questionnaireAction.LOAD:
            return {
                ...state,
                isFetching: true
            }
        case questionnaireAction.LOADSUCCEED:
            return {
                ...state,
                isFetching: false,
                contactInfo: action.payLoad
            }
        default:
            return state;
    }
}

