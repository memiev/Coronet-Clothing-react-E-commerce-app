import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        //when you create an object literal {} and you wrap the object’s key in array brackets [key] 
        //you can dynamically set that key.
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        type="email"
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required /> {/*requared is native html elements */}

                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sigh In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >Sigh in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;