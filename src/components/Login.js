import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Logo from '../images/google-logo.png'

const Login = () => {
    //hardcoded email and password
    const email = 'abhay@example.com';
    const password = 'letmein';

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    console.log(localStorage.getItem("token"))

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const  makeToken = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(user === {email} && pwd==={password}){
            const accessToken = makeToken(5);
            localStorage.setItem("token", accessToken);
        }

        else{
            setErrMsg('Login Failed');
        }
       
        setUser('');
        setPwd('');
        navigate('/students', { replace: true });
    }

    return (
      <section className='login-screen'>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <p className="text">Don't have an account ? signup instead</p>
          <button className="btn-submit">Submit</button>
        </form>
        <div className="credentials">
          <h2 style={{ color: "black" }}>OR</h2>
          <button className="btn-google">
          <span className='logo-box'>
            <img src={Logo} className='logo'  alt=''/>
          </span>
            Login with Google
          </button>
        </div>
      </section>
    );
}

export default Login
