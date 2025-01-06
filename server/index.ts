import { createHTTPServer } from '@trpc/server/adapters/standalone'
import dotenv from 'dotenv'
import { appRouter } from './src/rpc/router'

// export router type for the client
export type AppRouter = typeof appRouter

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3200

const { listen } = createHTTPServer({
  router: appRouter,
})

listen(port)
console.log(`Listening on port: ${port}`)
