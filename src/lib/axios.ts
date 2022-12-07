import axios from 'axios'

export const apiPost = axios.create({
  baseURL:
    'https://api.github.com/search/issues?q=%20repo:SWEThiago/github-Blog',
})
