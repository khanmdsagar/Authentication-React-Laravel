import React, { Component } from 'react';
import '../assets/css/loginbox.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {$alert, $toast, $confirm, $loader_show, $loader_hide} from 'asteroid-alert';

class RegistrationBox extends Component {

    state = { 
        name: '',
        email: '',
        password: ''
    }

    onChangeHandler(event){
        var input_name = event.target.name
        var input_value = event.target.value

        this.setState({
            [input_name]: input_value
        })
    }

    onSubmitHandler(){
        $loader_show()
        axios.post('http://127.0.0.1:8000/api/on-registration', {name: this.state.name, email:this.state.email, password: this.state.password})
        .then(response=>{
            $loader_hide()
            $toast(response.data)
        })
        .catch(error=>{
            $loader_hide()
            $toast("Error happened")
        })
    }
    

    render() { 
        return ( 
            <div id='login-box'>
                <div id='login-field'>

                    <h3>Registration</h3>

                    <input 
                        onChange={this.onChangeHandler.bind(this)}
                        className="input-field"
                        name="name" 
                        type="text" 
                        placeholder="Enter Name"
                    /> <br/><br/>

                    <input 
                        onChange={this.onChangeHandler.bind(this)}
                        className="input-field"
                        name="email" 
                        type="text" 
                        placeholder="Enter Email"
                    /> <br/><br/>

                    <input 
                        onChange={this.onChangeHandler.bind(this)}
                        className="input-field"
                        name="password" 
                        type="password" 
                        placeholder="Enter Password"
                    /> <br/><br/>

                    <button id="login-button" onClick={this.onSubmitHandler.bind(this)}>
                        Register
                    </button><br/>

                </div>

                <div id="reg-here">
                    <small>
                        <Link to="/">
                            Login Here
                        </Link>
                    </small>
                </div>
            </div>
        )
    }
}
 
export default RegistrationBox