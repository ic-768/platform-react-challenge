import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-6 text-center">
      <h1 className="mb-2 text-4xl font-bold text-gray-800">
        404: Cat Route not found
      </h1>
      <p className="mb-6 text-xl text-gray-600">
        Oops! This page has gone missing like a cat at bath time.
      </p>

      <div className="mb-8 max-w-md rounded-lg border border-blue-100 bg-blue-50 p-4">
        <p className="text-gray-700">
          The URL you&apos;re looking for might be incorrect. If not, then this
          is quite embarassing
        </p>
      </div>

      <Link to="/">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          Back to Cat Lover
        </Button>
      </Link>
    </main>
  );
}
