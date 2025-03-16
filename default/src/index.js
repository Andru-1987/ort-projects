import { Server } from "./server"
import { AppRouter } from "./router"

const options = {
    routes: App.routes,
    port: 3001
}

const server = new Server(options)
server.start()
