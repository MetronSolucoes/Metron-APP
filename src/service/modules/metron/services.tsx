import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ serviceId = '', ...params }) => {
  return await metronAPI.get(`/services/${serviceId}`, { params })
}

//const post = async (params) => {
//	return await metronAPI.post('/services', { params })
//}


export default {
  get
}
