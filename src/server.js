const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
)

app.get(':endpoint(^/\\w*)', async (req, res) => {
  try {
    const url = `https:/${req.params.endpoint}`
    const params = req.query
    const response = await axios.get(url, { params })
    res.json({ status: response.status, data: response.data })
  } catch (error) {
    res.json(error)
  }
})

app.post(':endpoint(^/\\w*)', async (req, res) => {
  try {
    const url = `https:/${req.params.endpoint}`
    const data = req.body
    const response = await axios.post(url, data)
    res.json({ status: response.status, data: response.data })
  } catch (error) {
    res.json(error)
  }
})

const port = process.env.PORT || 3000
app.listen(port)
