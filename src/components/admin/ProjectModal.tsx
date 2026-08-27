'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { X, Loader2, Layers } from 'lucide-react';
import type { Project, ContentStatus } from '@/types/database.types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  projectToEdit?: Project | null;
}

export function ProjectModal({ isOpen, onClose, onSuccess, projectToEdit }: ProjectModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [liveDemoUrl, setLiveDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [techStackInput, setTechStackInput] = useState('');
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState<ContentStatus>('published');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (projectToEdit) {
      setTitle(projectToEdit.title);
      setDescription(projectToEdit.description || '');
      setThumbnailUrl(projectToEdit.thumbnail_url || '');
      setLiveDemoUrl(projectToEdit.live_demo_url || '');
      setGithubUrl(projectToEdit.github_url || '');
      setTechStackInput(projectToEdit.tech_stack ? projectToEdit.tech_stack.join(', ') : '');
      setFeatured(projectToEdit.featured);
      setStatus(projectToEdit.status);
    } else {
      resetForm();
    }
  }, [projectToEdit, isOpen]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setThumbnailUrl('');
    setLiveDemoUrl('');
    setGithubUrl('');
    setTechStackInput('');
    setFeatured(false);
    setStatus('published');
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Parse comma-separated tech stack input
    const techStackArray = techStackInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const payload = {
      title,
      description: description || null,
      thumbnail_url: thumbnailUrl || null,
      live_demo_url: liveDemoUrl || null,
      github_url: githubUrl || null,
      tech_stack: techStackArray,
      featured,
      status,
    };

    try {
      const supabase = createClient();
      const projectsTable = supabase.from('projects') as any;

      if (projectToEdit) {
        const { error } = await projectsTable
          .update(payload)
          .eq('id', projectToEdit.id);

        if (error) throw error;
      } else {
        const { error } = await projectsTable.insert([payload]);
        if (error) throw error;
      }

      onSuccess();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save project to Supabase.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Layers className="h-5 w-5 text-indigo-400" />
            <span>{projectToEdit ? 'Edit Project' : 'Add New Project'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Title */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Project Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="CodeWithSukh Course Platform"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Tech Stack */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">
                Tech Stack (Comma-separated tags) *
              </label>
              <input
                type="text"
                required
                value={techStackInput}
                onChange={(e) => setTechStackInput(e.target.value)}
                placeholder="React, Next.js, TypeScript, Tailwind CSS, Supabase"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Live Demo URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Live Demo URL</label>
              <input
                type="url"
                value={liveDemoUrl}
                onChange={(e) => setLiveDemoUrl(e.target.value)}
                placeholder="https://demo.codewithsukh.dev"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* GitHub Repo URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">GitHub Repository URL</label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/sukhsingh1313/..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Thumbnail URL */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Thumbnail Image URL</label>
              <input
                type="url"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Publication Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Publication Status *</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ContentStatus)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-2.5 pt-6">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="featured" className="text-xs font-semibold text-slate-300 cursor-pointer">
                Mark as Featured Project
              </label>
            </div>

            {/* Description */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Project Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Comprehensive details on architecture and features..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-xs font-bold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              <span>{projectToEdit ? 'Save Changes' : 'Create Project'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
