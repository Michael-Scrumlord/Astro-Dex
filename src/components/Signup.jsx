import React from 'react'
import Stars from './Stars'
import { Canvas } from "@react-three/fiber"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:5000/Signup', {username, email, password});
            console.log(response.data)
            setError('');
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data.message);
        }
    }
    return (
        <div className='FormContainer'>
            <Canvas
                camera={{ fov: 35, zoom: 0.1, near: 1, far: 1000, position: [-6, 0, 0] }}
                style={{
                position: "absolute",
                backgroundColor: '#1b1b1c',
                height: "100%",
                width: "100%",
                }}>
                <Stars rotate='on' />
            </Canvas>
            <div className='FormBox'>
                <h1>Sign up for Astro Dex</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='FormField'>
                        <div className='FormControl'>
                            <input 
                                placeholder='Username'
                                className='FormInput'
                                type="text" 
                                autoComplete='off' 
                                name='username' 
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className='FormField'>
                        <div className='FormControl'>
                            <input 
                                placeholder='Email'
                                className='FormInput'
                                type="email" 
                                name='email' 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className='FormField'>
                        <div className='FormControl'>
                            <input 
                                placeholder='Password'
                                className='FormInput'
                                type="password" 
                                name='password' 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <button
                    type="submit"
                    className="FormButton is-block is-info is-fullwidth"
                    >
                    Sign Up
                    </button>
                    {error && <p className='FormError'>{error}</p>}
                </form>
                Already have an account? <Link to="/Login">Login here</Link>
            </div>
        </div>  
    )
}
