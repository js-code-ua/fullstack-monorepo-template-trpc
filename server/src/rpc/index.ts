import { initTRPC } from '@trpc/server'

const tRpc = initTRPC.create()

export const { procedure, router } = tRpc
