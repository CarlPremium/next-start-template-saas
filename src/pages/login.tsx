import { useState } from 'react';
import { useRouter } from 'next/router';
import getSupabaseClient from '@/utils/supabaseClient';

export default function Login() {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(``);

  const signInWithEmail = async () => {
    setLoading(true);
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      router.push(`/account`);
    }
    setLoading(false);
  };

  const signInWithMagicLink = async () => {
    setLoading(true);
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : `Check your email for the magic link`);
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithOAuth({ provider: `google` });
    if (error) setMessage(error.message);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        className="border p-2 w-full mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mr-2"
        onClick={signInWithEmail}
        disabled={loading}
        type="button"
      >
        Sign in
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 mr-2"
        onClick={signInWithMagicLink}
        disabled={loading}
        type="button"
      >
        Magic Link
      </button>
      <button className="bg-red-500 text-white px-4 py-2" onClick={signInWithGoogle} disabled={loading} type="button">
        Google
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
