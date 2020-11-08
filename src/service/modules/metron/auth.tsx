import api from '../../api';
import humps from 'humps';

import { AUTH_TOKEN } from '../../constants'
import { useHistory } from 'react-router-dom'

const history = useHistory()

const metronAPI = api.create('metron', false)

const login = async (data: any) => {
    const response = await metronAPI.post('/authentication', data)
    const token = response.data.authToken

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

const getUserIdFromToken = () => {
    const token = getToken()
    const payload = humps.camelizeKeys(JSON.parse(atob(token.split('.')[1])))
  
    return payload.userID
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