import { redirect } from 'next/navigation';

export default async function CartRedirect() {
  redirect('/shop');
}
