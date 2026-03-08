'use client';

import { useState } from 'react';
import Image from 'next/image';
import projects from '@/data/projectsData';

export default function Projects({ onBack, onContactClick }) {
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.status === filter);

    const runningCount = projects.filter(p => p.status === 'running').length;
    const completedCount = projects.filter(p => p.status === 'completed').length;

    const tabs = [
        { key: 'all', label: 'All Projects', count: projects.length },
        { key: 'running', label: 'Running', count: runningCount },
        { key: 'completed', label: 'Completed', count: completedCount },
    ];

    return (
        <main className="min-h-screen fade-in">
            {/* Hero Banner */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-sky-300 hover:text-white transition mb-8 group"
                    >
                        <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                        <span className="text-sm font-medium">Back to Home</span>
                    </button>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Projects</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl">
                        A showcase of our engineering excellence — from active installations to successfully delivered projects across Kerala.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-8 mt-10">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">{projects.length}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400">Total</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-emerald-400">{runningCount}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400">Running</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-sky-400">{completedCount}</span>
                            <span className="text-xs uppercase tracking-wider text-slate-400">Completed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Tabs & Cards */}
            <section className="py-16 bg-slate-50/80">
                <div className="container mx-auto px-6">
                    {/* Tab Pills */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setFilter(tab.key)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === tab.key
                                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {tab.label}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${filter === tab.key
                                        ? 'bg-white/20 text-white'
                                        : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Project Cards Grid */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <i className="fas fa-folder-open text-5xl text-slate-300 mb-4"></i>
                            <p className="text-slate-400 text-lg">No projects in this category yet.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((project) => (
                                <div
                                    key={project.id}
                                    className="glass-panel rounded-3xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300 group"
                                >
                                    {/* Image or gradient placeholder */}
                                    {project.image ? (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        </div>
                                    ) : (
                                        <div className="h-4 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500"></div>
                                    )}

                                    <div className="p-7">
                                        {/* Status badge + Category */}
                                        <div className="flex items-center justify-between mb-4">
                                            {project.status === 'running' ? (
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Running
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
                                                    <i className="fas fa-check-circle text-sky-500"></i>
                                                    Completed
                                                </span>
                                            )}
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Project name */}
                                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                                            {project.name}
                                        </h3>

                                        {/* Client & Location */}
                                        <div className="flex flex-col gap-1 mb-4">
                                            {project.client && (
                                                <span className="text-sm text-slate-500">
                                                    <i className="fas fa-user-tie text-slate-400 mr-2 w-4"></i>
                                                    {project.client}
                                                </span>
                                            )}
                                            <span className="text-sm text-slate-500">
                                                <i className="fas fa-map-marker-alt text-slate-400 mr-2 w-4"></i>
                                                {project.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Scope items */}
                                        {project.scope && project.scope.length > 0 && (
                                            <div className="border-t border-slate-100 pt-4">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                                                    Scope of Work
                                                </span>
                                                <ul className="space-y-1.5">
                                                    {project.scope.map((item, i) => (
                                                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                                            <i className="fas fa-chevron-right text-[8px] text-sky-400 mt-1.5 flex-shrink-0"></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Completed date */}
                                        {project.status === 'completed' && project.completedDate && (
                                            <div className="mt-4 pt-3 border-t border-slate-100">
                                                <span className="text-xs text-slate-400">
                                                    <i className="fas fa-calendar-check mr-1"></i>
                                                    Completed: {project.completedDate}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">Have a Project in Mind?</h2>
                    <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                        Let&apos;s discuss how V4 Building Solutions can bring your vision to life with engineering excellence.
                    </p>
                    <button
                        onClick={onContactClick}
                        className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition shadow-lg shadow-slate-900/20"
                    >
                        Get in Touch <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </section>
        </main>
    );
}
