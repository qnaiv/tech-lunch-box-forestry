import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('blog');

  const formattedPosts = allPosts.map(post => ({
    title: post.data.title,
    url: `/blog/${post.slug}`,
    summary: post.data.summary || post.body.substring(0, 150) + '...', // 記事の要約または最初の150文字
  }));

  return new Response(JSON.stringify(formattedPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
