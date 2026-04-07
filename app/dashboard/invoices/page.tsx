import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateInvoice />
      </div>
    </div>
  );
}