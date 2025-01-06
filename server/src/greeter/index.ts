import { router } from '../rpc'
import { getHelloMessageProcedure } from './procedures'

export const greeterRouter = {
  greeter: router({ ...getHelloMessageProcedure }),
}
