'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Login failed');
            }

            const data = await response.json();

            // Store user & token
            localStorage.setItem('synth_token', data.access_token);
            localStorage.setItem('synth_user', JSON.stringify(data.user));

            // Redirect to home or audit
            router.push('/');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-primaryBg relative flex items-center justify-center p-6 pt-32 overflow-hidden">
            {/* Background blobs */}
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-accentGreen rounded-full opacity-10 blur-[120px] animate-glow pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-accentGlow rounded-full opacity-10 blur-[140px] animate-glow pointer-events-none" />

            <div className="relative z-10 w-full max-w-md animate-slide-up-fade">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-secondaryText hover:text-accentGreen transition-colors mb-8 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Card */}
                <div className="glass p-8 md:p-10 rounded-3xl border border-borderColor">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-accentGreen to-accentGlow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Sparkles className="text-white" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold mb-2 font-display">Welcome Back</h1>
                        <p className="text-secondaryText">Log in to your Synth account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-500 text-sm animate-shake">
                                <AlertCircle size={18} />
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondaryText ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondaryText" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="name@company.com"
                                    className="w-full bg-borderColor/20 border border-borderColor/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accentGreen transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondaryText ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondaryText" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full bg-borderColor/20 border border-borderColor/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accentGreen transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary bg-accentGreen hover:bg-accentGlow text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <p className="text-center mt-8 text-secondaryText text-sm">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-accentGreen hover:underline font-semibold">
                            Create one for free
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
