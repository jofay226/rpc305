"use client";
import { trpc } from "@/trpc/TrpcProvider";

export default function Home() {
  const { data: users } = trpc.getAllUsers.useQuery();
  console.log(users);

  return (
    <main>
      <section className="flex gap-4">
        {users?.map((u) => (
          <div key={u.id} className="border-2 border-white p-4">
            <p>{u.id}</p>
            <p>{u.name}</p>
            <p>{u.email}</p>
            <button className="p-2 border-2 border-white">update</button>
            <button className="p-2 border-2 border-white">delete</button>
          </div>
        ))}
      </section>
    </main>
  );
}
