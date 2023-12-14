import NavBar from "./NavBar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="max-w-7pxl m-auto p-4">{children}</main>
    </>
  );
}
