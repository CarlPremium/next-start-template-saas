/* eslint-disable @typescript-eslint/quotes */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import getSupabaseClient from '@/utils/supabaseClient';

export default function Login() {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const emailMutation = useMutation({
    mutationFn: async () => {
      if (!supabase) throw new Error('Supabase not ready');
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    },
    onSuccess: () => {
      router.push('/account');
    },
    onError: (err: any) => {
      setMessage(err.message);
    },
  });

  const signInWithMagicLink = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : 'Check your email for the magic link');
  };

  const signInWithGoogle = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) setMessage(error.message);
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
        onClick={() => emailMutation.mutate()}
        disabled={emailMutation.isPending}
        type="button"
      >
        Sign in
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 mr-2"
        onClick={signInWithMagicLink}
        disabled={emailMutation.isPending}
        type="button"
      >
        Magic Link
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={signInWithGoogle}
        disabled={emailMutation.isPending}
        type="button"
      >
        Google
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
/* eslint-enable @typescript-eslint/quotes */
