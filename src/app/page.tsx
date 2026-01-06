import SalesChart from "@/components/SalesChart";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-50 p-10 dark:bg-black">
      <h1 className="mb-6 text-3xl font-semibold text-black dark:text-white">
        Sales Dashboard
      </h1>

      <div className="rounded-xl bg-white p-6 shadow dark:bg-zinc-900">
        <SalesChart />
      </div>
    </main>
  );
}
