import React, { PureComponent } from 'react'
import '../assets/css/loginbox.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {$alert, $toast, $confirm, $loader_show, $loader_hide} from 'asteroid-alert';

class LoginBox extends PureComponent {
    state = {
        email: '',
        password: '' 
    }
    
    onChangeHandler(event){
        var input_name = event.target.name
        var input_value = event.target.value

        this.setState({[input_name]: input_value})
    }

    onSubmitHandler(){
        $alert(this.state.email)
    }

    render() {
        return (
            <div id='login-box'>
            <div id='login-field'>

                <h3>Login</h3>

                <input
                    onChange={this.onChangeHandler.bind(this)}
                    className="input-field"
                    id="email" 
                    name="email"
                    type="text" 
                    placeholder="Enter Email"
                /> <br/><br/>

                <input 
                    onChange={this.onChangeHandler.bind(this)}
                    className="input-field"
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Enter Password"
                /> <br/><br/>

                <div>
                    <small>Forget Password</small>
                </div> <br/>

                <button id="login-button" onClick={this.onSubmitHandler.bind(this)}> 
                    Login
                </button><br/>
            </div>

            <div id="reg-here">
                <small>
                    <Link to="/register">
                        Register Here
                    </Link>
                </small>
            </div>
        </div>
        )
    }
}

export default LoginBox