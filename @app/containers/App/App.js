import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import StartContainer from '../Start/StartContainer';
import Questionnaire from '../Questionnaire/Questionnaire';
import Mask from '../../components/Mask/Mask';
import 'redux';
// import store from '../../store/createStore';
// import * as startAction from '../../actions/start';

export default class App extends Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <div>
                <Mask />
                <div>This is Header</div>
                <Switch>
                    <Route exact path="/" component={StartContainer}  />
                    <Route path="/questionnaire" component={Questionnaire} />
                </Switch>
                <div>This is Footer</div>
            </div>
        );
    }
}

