import React, {Component} from 'react';
import {getLoginObject} from '../utils/getLoginObject';
import {handleError} from '../utils/handleError';


class Register extends Component {
    componentDidMount() {
        let LoginObject = getLoginObject();
        var registration_options = {};
        registration_options.container = 'registration-container';
        registration_options.onSuccess = function (response) {
            console.log(response);
            alert("Successfully Registered");
        };
        registration_options.onError = function (errors) {
            console.log(errors);
            alert(handleError(errors));
        };
        LoginObject.init('registration', registration_options);
    }

    render() {
        return (
            <div>
                <h3> Register </h3>
                <div id="registration-container"></div>
                <button onClick={this.props.action}> Back</button>
            </div>
        )
    }
}

export default Register;