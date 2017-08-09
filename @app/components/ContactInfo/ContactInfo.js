import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';

class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.contactInfo ?  this.props.contactInfo.Email : ''}
                {/* {this.props.contactInfo} */}
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