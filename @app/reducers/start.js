import * as startAction from '../actions/start';

const initialState = {
    payLoad: null,
    number: 0
};

export default function startReducer(state = initialState, action = {}) {
    switch (action.type) {
        case startAction.PROCEED:
            return {
                ...state,
                isFetching: true
            }
        case startAction.PROCEEDSUCCEED:
            return {
                ...state,
                isValid: action.payLoad,
                isFetching: false
            }
        case startAction.PROCEEDERROR:
            return {
                ...state,
                isFetching: false
            };
        case startAction.INCREASE:
            return {
                ...state,
                number: state.number + 1
            };
        default:
            return state;
    }
}

