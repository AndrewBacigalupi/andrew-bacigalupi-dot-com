"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { use } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-gray-900">
      <main className="max-w-5xl w-full px-4 pt-16">
        <Link 
          href="/thoughts"
          className="text-gray-600 hover:text-gray-900 mb-8 inline-block text-sm"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← Back to thoughts
        </Link>

        <h1 className="text-5xl font-bold mb-4 mt-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {post.title}
        </h1>
        <p className="text-sm text-gray-600 mb-12 border-b border-gray-300 pb-6" style={{ fontFamily: 'Georgia, serif' }}>
          {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <article 
          className="text-gray-900 w-full" 
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <div className="mb-36">
            <ReactMarkdown
              components={{
                p: ({ ...props }) => <p className="mb-6 last:mb-0 text-lg leading-7" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                h2: ({ ...props }) => <h2 className="text-3xl font-bold mt-10 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                h3: ({ ...props }) => <h3 className="text-2xl font-bold mt-8 mb-3 tracking-tight" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                ul: ({ ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                li: ({ ...props }) => <li className="text-lg leading-7" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                strong: ({ ...props }) => <strong className="font-bold" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                em: ({ ...props }) => <em className="italic" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                a: ({ ...props }) => <a className="text-blue-600 hover:underline" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
                code: ({ ...props }) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
                blockquote: ({ ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700" style={{ fontFamily: 'Georgia, serif' }} {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}

