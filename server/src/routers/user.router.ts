import { prisma } from '../db/db.ts';
import { publicProcedure, router } from '../trpc/trpc.ts';
import z from 'zod';

export const appRouter = router({
  getAllUsers: publicProcedure.query(async () => {
    const users = await prisma.findMany();
    return users
  }),
  getSingleUser: publicProcedure.input(z.object({id: z.string()})).query(async (opts) => {
    console.log(opts)
  }),

  // deleteUser: publicProcedure
});
 

export type AppRouter = typeof appRouter;







