import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers'
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <CustomersTable customers = {customers}></CustomersTable>
    </div>
  );
}
