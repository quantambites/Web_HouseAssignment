import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doSignOut } from '@/services/auth'
import { LogOut } from "lucide-react";

const Signout = () => {
    const navigate = useNavigate()
    return (
        <>
        <button 
        onClick={() => { doSignOut().then(() => { navigate('/auth/login') }) }} 
        className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
        >
            <LogOut size={20} /> 
            <span
            className="font-semibold "
            >  
            Logout
            </span>
        </button>
        </>
    )  
}

export default Signout