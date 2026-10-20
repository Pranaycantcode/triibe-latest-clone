import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/triibune';
import type { Metadata } from 'next';

export const revalidate = 3600; 

export const metadata: Metadata = {
  title: 'The TRIIBUNE | TRIIBE',
  description: 'Monthly updates, stories, and news on our mission to back next-gen nonprofit founders.',
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <header className="max-w-2xl mb-14">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
          The TRIIBUNE
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Monthly newsletter and updates on our mission to help next-gen nonprofit founders scale their impact.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-border rounded-2xl">
          <p className="text-muted-foreground text-sm">No posts available right now.</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const formattedDate = post.pubDate
              ? new Date(post.pubDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : null;

            return (
              <article
                key={post.slug}
                className="group flex flex-col border border-border rounded-2xl overflow-hidden bg-card text-card-foreground hover:border-primary/40 transition-colors shadow-sm"
              >
                {post.coverImage && (
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] w-full bg-muted overflow-hidden block">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                    {formattedDate && <time>{formattedDate}</time>}
                    {post.author && (
                      <>
                        <span>•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                    {post.snippet}
                  </p>

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform"
                    >
                      Read post <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}