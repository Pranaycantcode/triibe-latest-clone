import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/triibune";

export const revalidate = 3600;

interface PostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return { title: "Post Not Found | TRIIBE" };

  return {
    title: `${post.title} | TRIIBE`,
    description: post.snippet,
    alternates: {
      canonical: `https://triibe.org/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.snippet,
      url: `https://triibe.org/blog/${slug}`,
      siteName: "TRIIBE",
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.pubDate
    ? new Date(post.pubDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          &larr; Back to all updates
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.author}</span>
          {formattedDate && (
            <>
              <span>•</span>
              <time>{formattedDate}</time>
            </>
          )}
        </div>
      </header>

      {post.coverImage && (
        <div className="relative aspect-[16/9] w-full mb-10 rounded-2xl overflow-hidden border border-border">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <article
        className="triibune-article prose prose-neutral dark:prose-invert max-w-none text-foreground"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <section className="mt-16 p-8 border border-border rounded-2xl bg-card text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Subscribe to The TRIIBUNE
        </h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
          Get monthly updates on how TRIIBE supports next-gen nonprofit founders
          directly in your inbox.
        </p>
        <a
          href="https://blog.triibe.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          Subscribe on Beehiiv
        </a>
      </section>
    </main>
  );
}
