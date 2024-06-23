import axios from 'axios'

export const getContentType = () => ({
  'Content-Type': 'application/json'
})

export const API_URL = `http://localhost:8080/api`

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})

const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})

export default instance
