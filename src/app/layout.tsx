import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-2">
        <h1 className="text-center text-2xl font-bold">Pokemon List</h1>
      </header>

      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
