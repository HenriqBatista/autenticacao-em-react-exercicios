import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


const useProtectedPage = () =>{

const navigate = useNavigate
const token = localStorage.getItem("token")

useEffect(()=>{

    if(!token){
        alert("Faça o Login para ter acesso ao site")
        goToLogin(navigate)
    }


},[token,navigate])
}

export default useProtectedPage