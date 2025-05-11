'use client';

<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const router = useRouter();
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading posts</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="space-y-3">
        {posts?.map((post: any) => (
          <div 
            key={post.id} 
            onClick={() => router.push(`/posts/${post.id}`)}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <h2 className="font-medium">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
=======
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Exploring the Wonders of the World',
    summary: 'Delve into the most breathtaking wonders across the globe.',
    imageSrc: '/images/wonders.jpg',
    imageAlt: 'Great Wall of China',
  },
  {
    id: 2,
    title: 'The Future of AI',
    summary: 'How artificial intelligence is reshaping our lives.',
    imageSrc: '/images/ai.jpg',
    imageAlt: 'AI illustration',
  },
];

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>

        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="bg-white rounded-xl shadow p-5">
              <Link href={`/posts/${post.id}`}>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-2">{post.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
>>>>>>> 1afd69270803731b117173ad4783cb645b438464
