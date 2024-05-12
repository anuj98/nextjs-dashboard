import { fetchFilteredCustomers } from '@/app/lib/data'
import Table from '@/app/ui/customers/table'
import { useSearchParams } from 'next/navigation';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;

    const customers = await fetchFilteredCustomers(query);
    return(
        <main>
            {/* @ts-expect-error Async Server Component*/}
            <Table customers={customers} currentPage={currentPage} />
        </main>
    )
}