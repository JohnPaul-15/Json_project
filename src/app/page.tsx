import UserList from '@/components/UserList';
import Charts from '@/components/Charts';

export default function Home() {
  return (
    <div className="space-y-8 p-4">
      <Charts />
      <UserList />
    </div>
  );
}