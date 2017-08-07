import React, { Component } from 'react';
import 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Odometer from '../../components/Odometer/Odometer';
import * as questionnaireAction from '../../actions/questionnaire';

class Questionnaire extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.load();
    }

    render() {
        return (
            <div className='container no-padding'>
                <div className="row">
                    <div className="row-fluid well2 active-form">
                        <h1>
                            Call Us
                        </h1>
                        <div>
                            This is Questionnaire
                            <Switch>
                                <Route exact path="/questionnaire" render={() => <Redirect to="/questionnaire/contactInfo" />} />
                                <Route path='/questionnaire/contactInfo' component={ContactInfo}></Route>
                                <Route path='/questionnaire/odometer' component={Odometer}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(questionnaireAction.load());
        }
    };
};

export default connect(null, mapDispatchToProps)(Questionnaire)

