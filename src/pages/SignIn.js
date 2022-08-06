import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
const SignIn = () => {
    return (
        <>
            <div class="signin__bg"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://images8.alphacoders.com/121/1211632.jpg")`,
                    backgroundPosition: "center center"
                }}
            >
                <div class="signin__container">
                    <form>
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <button type="submit">SUBMIT</button>
                        <div class="support">
                            <p>Forget Password?</p>
                            <p>Need An Account?</p>
                        </div>
                    </form>
                    <Link className='link__button' to="/" ><MdOutlineKeyboardBackspace size={30} /></Link>
                </div>
            </div>
        </>
    )
}

export default SignIn