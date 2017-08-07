import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';

class ContactInfo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.isShowPolicyNumber ?  (<div>test showing/hiding</div>) : null}
                <h3>
                        This is ContactInfo
                </h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShowPolicyNumber: state.isShowPolicyNumber
    }
};

const mapDispatchToProps = () => {
    return {
        proceed: () => {
            // dispatch(startAction.proceedError());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)