import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'isa-city-children-welfare-guide',
  apiKey: process.env.API_KEY || '',
})