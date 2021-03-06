import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ employeeId = '', ...params }) => {
  return await metronAPI.get(`/employes/${employeeId}`, { params })
}

const post = async ({ ...employe }) => {
  return await metronAPI.post('/employes', { employe })
}

const put = async ({ employeeId = '', ...employe }) => {
  return await metronAPI.put(`/employes/${employeeId}`, { employe })
}

const destroy = async ({ employeeId = '' }) => {
  return await metronAPI.delete(`/employes/${employeeId}`)
}

export default {
  get,
  post,
  put,
  destroy
}
