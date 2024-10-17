import { redirect } from 'next/navigation';

export default function RedirectUnknown() {
  redirect('/illustration');
}
