import axios from 'axios'
import React from 'react'
import { useNavigate } from "react-router-dom";
import httpClient from '../httpClient'
import './UserProfile.css'

export default function UserProfile({username}) {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await httpClient.get('http://127.0.0.1:5000/logout')
            console.log(response)
            navigate(0)
        } catch(error){
            console.log(error.data.message)
        }
    }

  return (
    <div className='ProfileCard'>
        <img
            className='ProfilePic'
            src={require("./assets/Stock-Profile.jpeg")}
        />
        <h2>{username}</h2>
        <p>Rank</p>
        <button
                    type="submit"
                    className="LogoutButton is-block is-info is-fullwidth"
                    onClick={handleSubmit}
                    >
                    Log Out
                    </button>
    </div>
  )
}
