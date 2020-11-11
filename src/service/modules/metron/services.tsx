import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ serviceId = '', ...params }) => {
  return await metronAPI.get(`/services/${serviceId}`, { params })
}

const post = async ({ ...service }) => {
  return await metronAPI.post('/services', { service })
}

const put = async ({ serviceId = '', ...service }) => {
  return await metronAPI.put(`/services/${serviceId}`, { service })
}

const destroy = async ({ serviceId = '' }) => {
  return await metronAPI.delete(`/services/${serviceId}`)
}

export default {
  get,
  post,
  put,
  destroy
}
