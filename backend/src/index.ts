import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

app.use(cors())
console.log('works')
type User = {
  id: string
  name: string
}
const formatValue = (inputValue: string) => inputValue.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

app.get('/', (req, res, next) => {
  console.log('někdo volá server')
  try {
    const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
    const data = JSON.parse(dataString).users as User[]
    res.send(data.filter(item => formatValue(item.name).includes(formatValue(req.query.search!.toString()))))
} catch (err) {
  next (err)
 }
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500).json('Something got wrong')
  res.json(err)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})