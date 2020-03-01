import axios from 'axios'

export default {
  getQuote: async () => {
    try {
      const { data } = await axios.get('https://favqs.com/api/qotd')
      return data
    } catch(e) {
      throw new Error('Error', e)
    }
  },
}