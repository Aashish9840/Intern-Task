import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl text-center font-medium text-gray-700 py-8">
          View Assign task
        </h1>
        <div className="flex gap-10 items-center">
          <Link
            href="task2"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-white text-base rounded-md"
          >
            Task 2
          </Link>
          <Link
            href="task3"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-white text-base rounded-md"
          >
            Task 3
          </Link>
          <Link
            href="task4"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-white text-base rounded-md"
          >
            Task 4
          </Link>
        </div>
      </div>
    </div>
  );
}
