'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Download, X, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('[PWA SW] Registered successfully:', reg.scope);
        })
        .catch((err) => {
          console.error('[PWA SW] Registration failed:', err);
        });
    }

    // 2. Listen for install prompt on Android / Chrome / Mobile browsers
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if user dismissed prompt recently in localStorage
      const dismissed = localStorage.getItem('codewithsukh_pwa_dismissed');
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      console.log('[PWA] App installed successfully');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[PWA] User response:', outcome);
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('codewithsukh_pwa_dismissed', 'true');
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl border border-cyan-500/40 bg-slate-950/95 p-4 sm:p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl flex flex-col gap-3 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Dismiss install banner"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content Header */}
        <div className="flex items-center gap-3 pr-6">
          <div className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-cyan-500/40 shadow-md">
            <Image src="/logo.png" alt="CodeWithSukh App" fill className="object-cover" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Android & Web App</span>
            </div>
            <h4 className="text-sm font-extrabold text-white">Install CodeWithSukh App</h4>
            <p className="text-xs text-slate-400">
              Download to your home screen for quick offline access & instant loading!
            </p>
          </div>
        </div>

        {/* Install CTA Button */}
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleInstallClick}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="h-4 w-4 stroke-[2.5]" />
            <span>Install App Now</span>
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="px-3 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
