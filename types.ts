
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  badge?: string;
  details?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface User {
  email: string;
  name: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

// Added ChatMessage interface to define roles and content for the AI Assistant
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export type Page = 'home' | 'collection' | 'product' | 'blog' | 'contact' | 'login' | 'signup' | 'checkout';
