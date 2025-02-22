import http from "node:http"
import {jsonHandler} from "./middlewares/jsonHandler.js"

async function listener(req, res) {
  await jsonHandler(req, res)
}

http.createServer(listener).listen(3333)