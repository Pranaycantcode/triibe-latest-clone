import Parser from "rss-parser";

export interface BlogPost {
  title: string;
  slug: string;
  pubDate: string;
  author: string;
  contentHtml: string;
  snippet: string;
  coverImage?: string;
  sourceUrl: string;
}

const parser = new Parser({
  customFields: {
    item: [
      ["content:encoded", "contentHtml"],
      ["enclosure", "enclosure"],
      ["dc:creator", "author"],
    ],
  },
});

const BEEHIIV_RSS_URL = "https://rss.beehiiv.com/feeds/9XyOWVf7cG.xml";

function sanitizeBeehiivHtml(html: string): string {
  if (!html) return "";

  return html

    .replace(/width=["']\d+["']/gi, "")
    .replace(/width:\s*\d+px/gi, "width: 100%")
    .replace(/max-width:\s*\d+px/gi, "max-width: 100%")

    .replace(/height=["']\d+["']/gi, "")

    .replace(/bgcolor=["'][^"']*["']/gi, "")

    .replace(/<img[^>]*(?:width=["']1["']|height=["']1["'])[^>]*>/gi, "")

    .replace(/(?:&nbsp;\s*){3,}/gi, " ");
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(BEEHIIV_RSS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch RSS: ${res.status}`);
    }

    const xml = await res.text();
    const feed = await parser.parseString(xml);

    return (feed.items || []).map((item) => {
      const slugFromUrl = item.link?.split("/p/")[1]?.replace(/\/$/, "");
      const fallbackSlug = (item.title || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

      const rawHtml =
        (item as Record<string, any>).contentHtml || item.content || "";

      return {
        title: item.title?.trim() || "The TRIIBUNE",
        slug: slugFromUrl || fallbackSlug,
        pubDate: item.pubDate || "",
        author: (item as Record<string, any>).author || "Kyle Matthys",
        contentHtml: sanitizeBeehiivHtml(rawHtml),
        snippet: (item.contentSnippet || "").slice(0, 180).trim() + "...",
        coverImage: item.enclosure?.url,
        sourceUrl: item.link || "https://blog.triibe.org",
      };
    });
  } catch (error) {
    console.error("Error in getAllBlogPosts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}
