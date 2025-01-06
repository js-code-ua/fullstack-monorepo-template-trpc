import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from 'server'

export const createClient = (url: string) =>
  createTRPCProxyClient<AppRouter>({ links: [httpBatchLink({ url })] })
