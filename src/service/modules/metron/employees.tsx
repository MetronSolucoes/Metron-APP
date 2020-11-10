import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ employeeId = '', ...params }) => {
  return await metronAPI.get(`/employes/${employeeId}`, { params })
}

export default {
  get
}
