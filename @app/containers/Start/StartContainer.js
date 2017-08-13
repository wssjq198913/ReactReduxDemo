import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';
import * as startAction from '../../actions/start';
import Start from '../../components/Start/Start';

class StartContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Start number={this.props.number} proceed={this.props.proceed} increase={this.props.increase}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.startState.number
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        proceed: (history) => {
            dispatch(startAction.proceed(history));
        },
        increase: () => {
            dispatch(startAction.increase())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartContainer)