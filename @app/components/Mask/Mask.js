import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';
import style from './Mask.scss';

class Mask extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            (this.props.showLoading) ?
                (<div className={style.mask}>
                    <div className={style.loadIcon}>Loading...</div>
                </div>)
                : null
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.startState.isFetching || state.questionnaireState.isFetching
    }
};


export default connect(mapStateToProps)(Mask)