import api from '../../api';

import { AUTH_TOKEN } from '../../constants'
import history from '../../history'


const metronAPI = api.create('metron', false)

const login = async (data: any) => {
    const response = await metronAPI.post('/authentication', data)
    const token = response.data.auth_token

    setToken(token)

    return response
}

const setToken = (token: any) => {
    localStorage.setItem(AUTH_TOKEN, token)
}

const getToken = () => {
    return localStorage.getItem(AUTH_TOKEN)
}


const logout = () => {
    history.push('/')
    localStorage.removeItem(AUTH_TOKEN)
}

// Este metodo precisa ser ajustado
const getUserIdFromToken = () => {
    const token = getToken()
    const payload = JSON.parse(atob(token.split('.')[1]))
    let keys = Object.keys(payload)
  
    // return payload.userID
}

const isAuthenticated = () => {
    const token = getToken()
    return !!token
}

export default {
    login,
    logout,
    getToken,
    setToken,
    isAuthenticated,
    getUserIdFromToken,
}