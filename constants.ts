
import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Grand "Eko" Agbada Set',
    price: 350000.00,
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1614676466623-f8d2035302c3?auto=format&fit=crop&q=80&w=800',
    badge: 'Elite Collection',
    description: 'A 3-piece hand-embroidered Agbada crafted from premium Aso-Oke and polished cotton. Perfect for weddings and high-profile events in Lagos.',
    details: ['Hand-stitched embroidery', 'Internal pocket for phones', 'Includes matching Fila (cap)', 'Polished Italian Cotton base']
  },
  {
    id: '2',
    name: 'Modern Abuja Kaftan',
    price: 85000.00,
    category: 'Native',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?auto=format&fit=crop&q=80&w=800',
    badge: 'Trending',
    description: 'Clean lines and a minimalist silhouette define this Abuja-style Kaftan. Tapered trousers for a contemporary finish.',
    details: ['Super 140s Wool blend', 'Hidden placket', 'Side slits for comfort', 'Slim-fit trousers']
  },
  {
    id: '3',
    name: 'Lagos Night Leather Blazer',
    price: 185000.00,
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1550993295-65775a756f51?auto=format&fit=crop&q=80&w=800',
    badge: 'Premium',
    description: 'Command attention at the club or gala in Victoria Island. Buttery soft leather with a cut that screams sophistication.',
    details: ['Full-grain Italian Leather', 'Silk lining', 'Internal chest pockets', 'Hand-finished lapels']
  },
  {
    id: '4',
    name: 'Ibadan Streetwear Hoodie',
    price: 45000.00,
    category: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Heavyweight cotton hoodie with custom "Doosseeh_xiv" Lagos map graphics. Streetwear for the bold Naija youth.',
    details: ['400GSM Cotton', 'Oversized fit', 'Screen-printed map details', 'Kangaroo pocket']
  },
  {
    id: '5',
    name: 'Zaria Linen Senator Set',
    price: 95000.00,
    category: 'Native',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800',
    badge: 'Summer 24',
    description: 'Breathable linen tailored into a classic Senator style. Keeps you cool from the boardroom in Marina to the bar in Maitama.',
    details: ['100% Organic Linen', 'Chest embroidery', 'Relaxed trousers', 'Moisture-wicking']
  },
  {
    id: '6',
    name: 'VI Velvet Loafers',
    price: 125000.00,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    badge: 'Exclusive',
    description: 'Hand-lasted velvet loafers with gold-toned hardware. The ultimate footwear for a VI soirée or a red-carpet event.',
    details: ['Silk Velvet', 'Leather sole', 'Quilted footbed', 'Hand-polished hardware']
  },
  {
    id: '7',
    name: 'Mainland Utility Vest',
    price: 55000.00,
    category: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adbb?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-pocket tactical vest designed for the urban commute on the Lagos Mainland. Functional fashion at its finest.',
    details: ['Ripstop Nylon', '8 functional pockets', 'Adjustable straps', 'Reflective branding']
  },
  {
    id: '8',
    name: 'Benin Bronze Cufflinks',
    price: 35000.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&q=80&w=800',
    badge: 'Artisan',
    description: 'Intricately cast cufflinks inspired by ancient Benin bronzes. A piece of Nigerian history for your sleeves.',
    details: ['Solid Bronze', 'Polished finish', 'Toggle closure', 'Hand-cast in Benin City']
  },
  {
    id: '9',
    name: 'Owerri Tapered Chinos',
    price: 42000.00,
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
    description: 'Smart-casual trousers with a sharp taper. Perfect for Friday office wear in Owerri or Port Harcourt.',
    details: ['Cotton Twill', 'Slight stretch', 'Reinforced seams', 'Slim fit']
  },
  {
    id: '10',
    name: 'Traditional Coral Beads',
    price: 210000.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=800',
    badge: 'Heritage',
    description: 'Authentic polished coral beads for traditional royalty. A staple for titled men during Iri Ji festivals or coronations.',
    details: ['Genuine Coral', 'Traditional threading', 'Vibrant orange hue', 'Heirloom quality']
  },
  {
    id: '11',
    name: 'Safari Jacket - Olive',
    price: 78000.00,
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    description: 'Rugged yet refined. The perfect layer for weekend getaways to Obudu or Yankari.',
    details: ['Heavyweight drill cotton', 'Four box pockets', 'Internal waist drawstring', 'Button cuffs']
  },
  {
    id: '12',
    name: 'Gidi Graphic Tee',
    price: 18000.00,
    category: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Soft cotton tee featuring minimalist Gidi iconography. An everyday essential for the Lagos hustle.',
    details: ['100% Ring-spun cotton', 'Ribbed neck', 'Screen print', 'Standard fit']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Tailoring in Mushin: The Heartbeat of Naija Fashion',
    excerpt: 'We take a deep dive into the bustling workshops of Mushin, where the magic of Nigerian craftsmanship happens every single day.',
    author: 'Chuka Obi',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800',
    category: 'Craftsmanship'
  },
  {
    id: 'b2',
    title: 'The Resurgence of Aso-Oke in Modern Streetwear',
    excerpt: 'How Gen-Z Nigerian designers are flipping traditional Yoruba fabrics into global fashion statements from Lagos to London.',
    author: 'Teniola Ade',
    date: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    category: 'Sustainability'
  },
  {
    id: 'b3',
    title: 'Abuja Fashion Week: Highlights from the Capital City',
    excerpt: 'The most stunning silhouettes and boldest patterns from this year’s most anticipated event in Abuja’s fashion calendar.',
    author: 'Marcus Thorne',
    date: 'Dec 20, 2024',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=800',
    category: 'Events'
  },
  {
    id: 'b4',
    title: 'A Guide to Styling Your Agbada for the Contemporary Gala',
    excerpt: 'Avoid the typical and embrace the unique. Here is how to stand out in a sea of tradition at the next Owambe.',
    author: 'Lola Badmus',
    date: 'Dec 22, 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    category: 'Style Guide'
  }
];

export const NAV_LINKS = [
  { label: 'The Collection', id: 'collection' },
  { label: 'Naija Journal', id: 'blog' },
  { label: 'VIP Concierge', id: 'contact' }
];
