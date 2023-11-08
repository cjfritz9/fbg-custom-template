import { redirect } from 'next/navigation';

export default async function Products({
  params: { handle }
}: {
  params: {
    handle: string;
  };
}) {
  redirect(`/shop/${handle}`);
}
