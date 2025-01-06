import { router } from './index'
import { greeterRouter } from '../greeter'

export const appRouter = router({
  ...greeterRouter,
})
