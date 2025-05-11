// src/services/mockApi.ts
import type { User, Post, Comment } from '@/types';

// Complete mock data matching JSONPlaceholder structure
const mockUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];

const mockPosts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
];

const mockComments: Comment[] = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }
];

// User API
export const fetchUser = (userId: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.id === userId);
      user ? resolve(user) : reject(new Error("User not found"));
    }, 300);
  });
};

export const fetchUsers = (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockUsers), 300);
  });
};

// Post API
export const fetchPost = (postId: number): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === postId);
      post ? resolve(post) : reject(new Error("Post not found"));
    }, 300);
  });
};

export const fetchPosts = (): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockPosts), 300);
  });
};

// Comment API
export const fetchComments = (postId: number): Promise<Comment[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockComments.filter(c => c.postId === postId));
    }, 300);
  });
};

export const fetchAllComments = (): Promise<Comment[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockComments), 300);
  });
};