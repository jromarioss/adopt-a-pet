import multer from 'fastify-multer'
import { randomBytes } from 'node:crypto'
import { resolve } from 'node:path'

const tmpFolder = resolve(__dirname, '..', '..', 'tmp')

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, tmpFolder)
    },
    filename: (_, file, cb) => {
      const fileHash = randomBytes(16).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      cb(null, fileName)
    },
  })
}
