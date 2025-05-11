import UserList from '@/components/UserList';
import Charts from '@/components/Charts';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Overview of user activity and statistics</p>
        </header>

        {/* Charts Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Statistics</h2>
          <Charts />
        </section>

        {/* Users List Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">All Users</h2>
            <Link href="/users" className="text-blue-600 hover:underline text-sm">
              View All Users →
            </Link>
          </div>
          <UserList />
        </section>

        {/* Posts Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Posts</h2>
            <Link href="/posts" className="text-blue-600 hover:underline text-sm">
              View All Posts →
            </Link>
          </div>
          <p className="text-gray-600">Stay updated with the latest posts and articles from your users or admin team.</p>
        </section>
      </div>
    </main>
  );
}
