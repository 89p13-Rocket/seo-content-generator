import { createServerSupabaseClient } from "./supabase-server";

export interface Article {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  venue: string;
  description: string;
  content: string;
  keywords: string[];
}

export const SITE_URL = "https://ainewstest.vercel.app";
export const SITE_NAME = "LIQUE Miami — News & Stories";

interface SupabasePost {
  id: number;
  slug: string;
  title: string;
  meta_description: string;
  content: string;
  tags: string[];
  published_at: string;
  status: string;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function mapPost(post: SupabasePost): Article {
  return {
    slug: post.slug,
    title: post.title,
    date: formatDate(post.published_at),
    dateISO: post.published_at.split("T")[0],
    venue: "LIQUE Miami",
    description: post.meta_description || "",
    content: post.content || "",
    keywords: post.tags || [],
  };
}

export async function getArticles(): Promise<Article[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, meta_description, content, tags, published_at, status")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data.map(mapPost);
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, meta_description, content, tags, published_at, status")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) return undefined;
  return mapPost(data);
}

export async function getAllSlugs(): Promise<string[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("status", "published");

  if (error || !data) return [];
  return data.map((p) => p.slug);
}
