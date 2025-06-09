import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '@/utils/supabaseClient';

export default function Account() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace(`/login`);
      else setUser(data.session.user);
    });
  }, [router]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push(`/`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Account</h1>
      {user && <p className="mb-4">Signed in as {user.email}</p>}
      <button className="bg-gray-800 text-white px-4 py-2" onClick={signOut} type="button">
        Sign Out
      </button>
    </div>
  );
}
