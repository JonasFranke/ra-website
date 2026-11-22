import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-4 px-20 m-4">
      <h1 className="text-3xl">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to the homepage</Link>
    </section>
  );
}
