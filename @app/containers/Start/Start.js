import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';
import * as startAction from '../../actions/start';

class Start extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <h2>Welcome to React + ES6 Demo</h2>
                </div>
                <div className='row'>
                    <label>UserName:</label>
                    <div className='row'>
                        <div className='col-md-6'>
                            <input className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <label>Password:</label>
                    <div className='row'>
                        <div className='col-md-6'>
                            <input type='password' className='form-control' />
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div>{this.props.number}</div>
                    <button className='btn btn-primary' onClick={() =>this.props.proceed(this.props.history)}>Login</button>
                    <br/>
                    <button className='btn btn-primary' onClick={this.props.increase}>Increase</button>
                </div>
            </div>
        );
    }
}

Start.propTypes = {
    policyNumber: React.PropTypes.string,
    pin: React.PropTypes.string,
    number: React.PropTypes.number
}

const mapStateToProps = (state) => {
    return {
        payLoad: state.startReducer.payLoad,
        isShowPolicyNumber: state.startReducer.isShowPolicyNumber,
        policyNumber: state.startReducer.policyNumber,
        number: state.startReducer.number
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

export default connect(mapStateToProps, mapDispatchToProps)(Start)