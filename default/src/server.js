import { json } from "express"
import express from "express"

export default class Server {
    constructor(routes, port) {
        this.routes = routes
        this.port = port
    }

    app = express()


    start() {
        this.app.use(json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(this.routes)

        this.app.listen(this.port, () => { console.log("🚀 Running at port: http://127.0.0.1:" + this.port) })
    }

}

