import { Github, Mail } from "iconoir-react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">
        Testing. Iconoir <Github />
        <Mail className="w-5 h-5 text-blue-500" />
      </h1>
    </div>
  );
}