import express from 'express'
const app = express()
const port = 5000


app.get('/', async (_, res) => {
    const result =await fetch('assets/json.json');
  return res.status(200).send(result)
})

app.listen(port, () => console.log(`Running on port ${port}`))