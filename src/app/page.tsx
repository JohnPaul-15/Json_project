import UserList from '@/components/UserList';
import Charts from '@/components/Charts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="mx-auto h-16 w-16" />
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/users" className="block text-gray-700 hover:text-blue-600 py-2">Users</Link>
            </li>
            <li>
              <Link href="/posts" className="block text-gray-700 hover:text-blue-600 py-2">Posts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-lg text-gray-500 mt-2">Overview of user activity and statistics</p>
        </header>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Statistics */}
          <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 User Statistics</h2>
            <Charts />
          </section>

          {/* Users List */}
          <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">👥 All Users</h2>
              <Link href="/users" className="text-blue-600 hover:underline text-sm font-medium">View All Users →</Link>
            </div>
            <UserList />
          </section>

          {/* Posts Section */}
          <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">📝 Posts</h2>
              <Link href="/posts" className="text-blue-600 hover:underline text-sm font-medium">View All Posts →</Link>
            </div>
            <p className="text-gray-600 text-base">Stay updated with the latest posts and articles from your users or admin team.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
