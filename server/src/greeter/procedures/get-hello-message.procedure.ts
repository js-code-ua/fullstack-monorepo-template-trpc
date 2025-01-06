import { z } from 'zod'
import { procedure } from '../../rpc'

export const getHelloMessageInputSchema = z.object({
  firstName: z.string().min(2).max(150).describe('User First Name'),
  lastName: z.string().min(2).max(150).describe('User Last Name'),
})

export const getHelloMessageOutputSchema = z.object({
  data: z.string().describe('Greeting message from the server'),
})

export const getHelloMessageProcedure = {
  getHelloMessage: procedure
    .input(getHelloMessageInputSchema)
    .output(getHelloMessageOutputSchema)
    .query(async ({ input }) => {
      try {
        const { firstName, lastName } = input
        const data = `Hello to ${firstName} ${lastName} from the server!`

        return { data }
      } catch (e) {
        console.error(e)
        throw e
      }
    }),
}
