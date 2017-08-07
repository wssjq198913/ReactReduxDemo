import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Start from '../Start/Start';
import Questionnaire from '../Questionnaire/Questionnaire';
import 'redux';
import { connect } from 'react-redux';
// import store from '../../store/createStore';
// import * as startAction from '../../actions/start';

class App extends Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <div>
                {this.props.showLoading ? (<div>LOADING.....</div>) : null}
                <div>This is Header</div>
                <Switch>
                    <Route exact path="/" component={Start}  />
                    <Route path="/questionnaire" component={Questionnaire} />
                </Switch>
                <div>This is Footer</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.startReducer.isFetching
    }
};

export default withRouter(connect(mapStateToProps, null)(App))

