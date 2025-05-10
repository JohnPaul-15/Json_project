// src/services/mockApi.ts
import type { User } from '@/types';

const mockUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net"
  }
];

export const fetchUser = (userId: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.id === userId);
      if (user) resolve(user);
      else reject(new Error("User not found"));
    }, 300);
  });
};

export const fetchUsers = (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockUsers), 300);
  });
};