"use client";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-gray-900 dark:text-gray-100">
      <main className="max-w-4xl w-full px-4 pt-16">
        <Link 
          href="/"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 inline-block text-sm"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← Back to home
        </Link>
        
        
        
        <div className="space-y-8">
          {sortedPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/thoughts/${post.slug}`}
              className="block border-b border-gray-300 dark:border-gray-700 pb-8 hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h2 className="text-3xl font-bold tracking-tight flex-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {post.title}
                </h2>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Georgia, serif' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
