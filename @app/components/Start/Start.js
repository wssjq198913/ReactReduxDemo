import React, { Component } from 'react';
import style from './Start.scss';

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
                    <button className={'btn btn-primary ' + style.myBtn} onClick={this.props.proceed}>Login</button>
                    <br/>
                    <button className='btn btn-primary' onClick={this.props.increase}>Increase</button>
                </div>
            </div>
        );
    }
}

Start.propTypes = {
    number: React.PropTypes.number,
    proceed: React.PropTypes.func,
    increase: React.PropTypes.func
}

export default Start