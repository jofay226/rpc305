"use client";
import { trpc } from "@/trpc/TrpcProvider";

export default function Home() {
  const { data } = trpc.getDate.useQuery();
  console.log(data);

  return <>lsdnjfk</>;
}
