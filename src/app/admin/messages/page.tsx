'use client';

import { useEffect, useState } from 'react';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';
import type { ContactInquiry } from '@/types/database.types';
import {
  Inbox,
  Mail,
  CheckCircle,
  Trash2,
  Search,
  Clock,
  User,
  Loader2,
  RefreshCw,
  MessageSquare,
} from 'lucide-react';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactInquiry | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    if (!isSupabaseConfigured()) {
      // Mock data fallback if Supabase unconfigured
      setMessages([
        {
          id: '1',
          name: 'Rahul Sharma',
          email: 'rahul@example.com',
          subject: 'Full-Stack Next.js Course Inquiry',
          message: 'Hi Sukhchain, I want to enroll in your Next.js and Supabase course. Please share the details.',
          status: 'unread',
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Ananya Verma',
          email: 'ananya@example.com',
          subject: 'Custom Web Development Project',
          message: 'Hello! We need a high-performance web application built with React Native and Django.',
          status: 'read',
          created_at: new Date(Date.now() - 86400000).toISOString(),
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { data, error } = await (supabase as any)
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase fetch contacts warning:', error.message);
      } else if (data) {
        setMessages(data as ContactInquiry[]);
      }
    } catch {
      // Fallback state
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (msg: ContactInquiry) => {
    const updated = messages.map((m) =>
      m.id === msg.id ? { ...m, status: 'read' as const } : m
    );
    setMessages(updated);
    if (selectedMessage?.id === msg.id) {
      setSelectedMessage({ ...selectedMessage, status: 'read' });
    }

    if (isSupabaseConfigured()) {
      try {
        const supabase = createClient();
        await (supabase as any).from('contacts').update({ status: 'read' }).eq('id', msg.id);
      } catch {}
    }
  };

  const deleteMessage = async (id: string) => {
    setMessages(messages.filter((m) => m.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);

    if (isSupabaseConfigured()) {
      try {
        const supabase = createClient();
        await (supabase as any).from('contacts').delete().eq('id', id);
      } catch {}
    }
  };

  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      (m.subject && m.subject.toLowerCase().includes(search.toLowerCase())) ||
      m.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
            <Inbox className="h-6 w-6 text-cyan-400" />
            <span>Contact Messages & Inquiries</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            View website visitor inquiries sent to <strong>codersukh@gmail.com</strong>.
          </p>
        </div>

        <button
          onClick={fetchMessages}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Inbox</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or message keyword..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
        />
      </div>

      {/* Main Grid: Message List + View Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-5 space-y-3">
          {loading ? (
            <div className="p-8 text-center text-slate-500 flex flex-col items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
              <span className="text-xs">Loading contact messages...</span>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center text-slate-500 text-xs space-y-2">
              <Inbox className="h-8 w-8 mx-auto text-slate-600" />
              <p>No messages found in your inbox.</p>
            </div>
          ) : (
            filteredMessages.map((msg) => {
              const isSelected = selectedMessage?.id === msg.id;
              const isUnread = msg.status === 'unread';

              return (
                <div
                  key={msg.id}
                  onClick={() => {
                    setSelectedMessage(msg);
                    if (isUnread) markAsRead(msg);
                  }}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-2 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 ring-1 ring-cyan-500'
                      : isUnread
                      ? 'bg-slate-900/90 border-slate-700 shadow-md'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isUnread && <span className="h-2 w-2 rounded-full bg-cyan-400 shrink-0" />}
                      <span className={`text-xs font-bold ${isUnread ? 'text-white' : 'text-slate-300'}`}>
                        {msg.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-cyan-400 truncate">
                    {msg.subject || 'New Website Inquiry'}
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Selected Message Detail Drawer */}
        <div className="lg:col-span-7">
          {selectedMessage ? (
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    {selectedMessage.subject || 'New Website Inquiry'}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-semibold text-slate-200">
                      <User className="h-3.5 w-3.5 text-cyan-400" />
                      {selectedMessage.name}
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400 font-mono">
                      <Mail className="h-3.5 w-3.5" />
                      {selectedMessage.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 transition-all"
                  title="Delete message"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Message Content
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  Received: {new Date(selectedMessage.created_at).toLocaleString()}
                </span>

                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Inquiry'}`}
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Reply via Email</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center text-slate-500 text-xs space-y-3">
              <MessageSquare className="h-10 w-10 text-slate-600" />
              <p>Select a contact message from the list to view details and reply.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
