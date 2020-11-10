import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ schedulingId = '', ...params }) => {
  return await metronAPI.get(`/schedulings/${schedulingId}`, { params })
}

export default {
  get
}
