import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ schedulingId = '', ...params }) => {
  return await metronAPI.get(`/schedulings/${schedulingId}`, { params })
}

const destroy = async ({ schedulingId = '' }) => {
  return await metronAPI.delete(`/schedulings/${schedulingId}`)
}

export default {
  get,
  destroy
}
