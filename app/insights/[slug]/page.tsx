import { notFound } from "next/navigation";
import { StaticPage } from "@/components/pages/StaticPage";
import { BLOG_POSTS, getBlogBySlug } from "@/content/blog";
import { makeBlogMetadata } from "@/content/metadata";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  return makeBlogMetadata(slug);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <StaticPage route={post.route} />;
}
