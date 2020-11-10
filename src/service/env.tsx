import { AUTH_TOKEN } from './constants'
const env = 'development'

export const getBaseUrl = (project: string) => envsBaseUrl['metron']['development']

const envsBaseUrl = {
  metron: {
    development: 'http://localhost:3001/api/v1/backoffice',
    production: 'https://metron-api.herokuapp.com/api/v1/backoffice'
  },
}