
import { Router } from "express"
import { MappingRouter } from "./routes/mapping.router"

export default class AppRouter {

    static routes() {

        const router = Router()

        router.use(Mapping.routes)

        return router
    }
}

