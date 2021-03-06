import React, {Component} from 'react';

import formController from './../controllers/formController';
import userModel from '../../models/userModel'
import userService from '../../services/userService'

class RegisterForm extends Component {
    render = () => {
        return (
             <div>   
                <form class="form-signin" id="registerForm" onSubmit={this.props.handleSubmit}>
                <h1 class="h3 mb-3 font-weight-normal">or register...</h1>
                <input  name="username" onChange={this.props.handleChange} type="text" value={this.props.username} class="form-control" placeholder="Username" required />

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="password" onChange={this.props.handleChange} value={this.props.password} class="form-control" placeholder="Password" required />
                <button class="btn btn-lg btn-success btn-block" type="submit">Register</button>                
                </form>
            </div>
            
        )
    }
}

export default formController(RegisterForm, userModel, userService.register);