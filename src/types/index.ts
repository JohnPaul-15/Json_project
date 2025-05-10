// src/types/index.ts
export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  address?: {
    street?: string;
    city?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
};