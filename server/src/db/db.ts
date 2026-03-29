let users = [
    {id: "1", name: "test1", email: "test1@gmail.com"},
    {id: "2", name: "test2", email: "test2@gmail.com"},
    {id: "3", name: "test3", email: "test3@gmail.com"},
]


export const prisma = {
    findMany: async () => users,
    findUnique: async (id: string) => {
        const user = users.find(u => u.id === id);
        return user
    },


    delete: async (id: string) => {
        users = users.filter(u => u.id !== id);
        return users                       
    }

}










