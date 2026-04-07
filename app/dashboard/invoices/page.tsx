import NextLink from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Invoices</h1>
      <NextLink href="/dashboard">dashboard</NextLink>
    </>
  );
}