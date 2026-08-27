import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export const metadata = {
  title: 'Admin Portal | CodeWithSukh',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check auth session on the server
  let isAuthenticated = false;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      isAuthenticated = true;
    }
  } catch {
    isAuthenticated = false;
  }

  return (
    <div className="min-h-screen bg-theme-main text-theme-main flex flex-col lg:flex-row transition-colors duration-300">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-6 md:p-10">{children}</main>
    </div>
  );
}
