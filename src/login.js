import React, { useState } from 'react'
import './app.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [enterEmail, setEnterEmail] = useState(true)
    const [inputPassword, setInputPassword] = useState('')
    const [enterPassword, setEnterPassword] = useState(true)



    const mailChangeHandler = (e) => {
        setInputEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setInputPassword(e.target.value)
        console.log(inputPassword)
    }

    const LoginFormHandler = (e) => {
        e.preventDefault();

        if (inputEmail.trim() === '') {
            setEnterEmail(false)
            return;
        }
        if (inputPassword.trim() === '') {
            setEnterPassword(false)
            return;
        }
        setInputEmail('')
        setInputPassword('')
        setEnterEmail(true)
        setEnterPassword(true)
    }


    return (
        <div>
            <header className="App-header" />
            <form className='LoginCover' onSubmit={LoginFormHandler}>
                <table className='logTable'>
                    <tr>
                        <td><label for='email'>USER MAIL ID</label>
                            <br></br>
                            <input
                                type='email'
                                className='email' name='email'
                                onChange={mailChangeHandler}
                                value={inputEmail}>
                            </input>
                        </td>
                    </tr>
                    {!enterEmail && <p className='validity'>please enter something</p>}
                    <br></br>
                    <tr>
                        <td><label for='password'>USER PASSWORD</label>
                            <br></br>
                            <input
                                type='password'
                                className='password' name='password'
                                onChange={passwordChangeHandler}
                                value={inputPassword}>
                            </input>
                        </td>
                    </tr>
                    {!enterPassword && <p className='validity'>please enter something</p>}
                    <div>
                    {inputEmail.trim() !== '' && inputPassword.trim() !==''                    ?
                    <Link to='/user' className='link' ><button className='login-btn' type='submit'>Login</button></Link>
                    :
                    <button className='login-btn' type='submit'>Login</button>
                    }
                </div>
                </table>
                
            </form>
        </div>
    )

}

