import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

app.use(cors())
type Users = {
  users: User[]
}
type User = {
  id: string
  name: string
}

const getUnifiedValue = (searchedValue: string) =>
  searchedValue.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

const readDataFromJSON = (fileName: string): Users => {
  const dataString = fs.readFileSync(`${__dirname}/../${fileName}.json`, 'utf-8')
  return JSON.parse(dataString)
}
const writeDataToJSON = (fileName: string, data: Users) => {
  fs.writeFileSync(`${__dirname}/../${fileName}.json`, JSON.stringify(data))
}

app.get('/', (req, res, next) => {
  try {
    const data = readDataFromJSON('data')
    console.log(data)
    res.send(
      data.users.filter(item =>
        getUnifiedValue(item.name).includes(getUnifiedValue(req.query.search!.toString()))
      )
    )
  } catch (err) {
    next(err)
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
