import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ serviceId = '', ...params }) => {
  return await metronAPI.get(`/services/${serviceId}`, { params })
}


export default {
  get
}
