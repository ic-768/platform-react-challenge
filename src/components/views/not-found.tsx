import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export default function NotFound() {
  return (
    <main className="mt-36 flex flex-col items-center gap-4 text-center">
      <h1 className="font-bold text-gray-800">404: Cat Route not found</h1>
      <h4 className="text-gray-600">
        Oops! This page has gone missing like a cat at bath time.
      </h4>

      <div className="max-w-md rounded-lg border border-blue-100 bg-blue-50 p-4">
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
