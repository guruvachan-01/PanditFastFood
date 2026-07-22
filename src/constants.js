// ─── Theme Colors ────────────────────────────────────────────────────────────
export const COLORS = {
  yellow:   '#FFB800',
  orange:   '#FF6B00',
  dark:     '#1A1A1A',
  darkGray: '#2D2D2D',
  green:    '#2ECC71',
  cream:    '#FFF8F0',
  white:    '#FFFFFF',
};

// ─── Menu Items ──────────────────────────────────────────────────────────────
export const menuItems = [
  { id: 1,  name: 'Samosa',        price: 12,  unit: 'piece', rating: 4.8, emoji: '🥟', category: 'Snacks',  desc: 'Crispy golden pastry filled with spiced potatoes & peas' },
  { id: 2,  name: 'Pakoda',        price: 12,  unit: 'piece', rating: 4.7, emoji: '🍤', category: 'Snacks',  desc: 'Crispy battered fritters served with green chutney' },
  { id: 3,  name: 'Bread Pakoda',  price: 15,  unit: 'piece', rating: 4.6, emoji: '🍞', category: 'Snacks',  desc: 'Stuffed bread dipped in chickpea batter & fried golden' },
  { id: 4,  name: 'Matar',         price: 140, unit: 'kg',    rating: 4.9, emoji: '🫛', category: 'Specials',desc: 'Tender green peas cooked in authentic desi spices' },
  { id: 5,  name: 'Mix Pakoda',    price: 200, unit: 'kg',    rating: 4.8, emoji: '🧆', category: 'Specials',desc: 'Assorted mixed vegetable fritters — perfect for parties' },
  { id: 6,  name: 'Momos Half',    price: 30,  unit: 'plate', rating: 4.9, emoji: '🥢', category: 'Momos',   desc: 'Steamed dumplings with spicy red chutney — 6 pcs' },
  { id: 7,  name: 'Momos Full',    price: 60,  unit: 'plate', rating: 4.9, emoji: '🥡', category: 'Momos',   desc: 'Full plate steamed dumplings with chutney — 12 pcs' },
  { id: 8,  name: 'Burger',        price: 20,  unit: 'piece', rating: 4.7, emoji: '🍔', category: 'Burgers', desc: 'Crispy aloo tikki burger with fresh veggies & sauce' },
  { id: 9,  name: 'Chowmein Plate',price: 20,  unit: 'plate', rating: 4.8, emoji: '🍜', category: 'Noodles', desc: 'Wok-tossed noodles with Indian street food flavors' },
];

// ─── Menu Filter Categories ───────────────────────────────────────────────────
export const menuCategories = ['All', 'Snacks', 'Momos', 'Burgers', 'Noodles', 'Specials'];

// ─── Homepage Food Categories ─────────────────────────────────────────────────
export const foodCategories = [
  { name: 'Samosa',    emoji: '🥟', color: '#FF6B00' },
  { name: 'Pakoda',    emoji: '🍤', color: '#FFB800' },
  { name: 'Burger',    emoji: '🍔', color: '#2ECC71' },
  { name: 'Momos',     emoji: '🥢', color: '#9B59B6' },
  { name: 'Chowmein',  emoji: '🍜', color: '#E74C3C' },
  { name: 'Mix Pakoda',emoji: '🧆', color: '#3498DB' },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const features = [
  { icon: '🌿', title: 'Fresh Ingredients',  desc: 'Sourced daily from local markets' },
  { icon: '⚡', title: 'Fast Service',        desc: 'Ready in minutes, never wait long' },
  { icon: '💰', title: 'Affordable Prices',  desc: 'Best taste at the lowest prices' },
  { icon: '🧼', title: 'Hygienic Cooking',   desc: 'Prepared in a clean environment' },
  { icon: '👨‍👩‍👧', title: 'Family Friendly',  desc: 'Perfect for all age groups' },
];

// ─── Customer Reviews ─────────────────────────────────────────────────────────
export const reviews = [
  { name: 'Rahul Sharma',  rating: 5, text: 'Best samosas in Bilaspur! Crispy, hot and absolutely delicious. Pandit ji\'s hands have magic!', avatar: '👨' },
  { name: 'Priya Verma',   rating: 5, text: 'Momos are out of this world! My whole family loves coming here every weekend.', avatar: '👩' },
  { name: 'Amit Tiwari',   rating: 5, text: 'Hygienic, affordable, and super tasty. The chowmein is better than any restaurant!', avatar: '🧑' },
  { name: 'Sunita Devi',   rating: 5, text: 'Daily visit is a must now! The bread pakoda with morning chai is heaven.', avatar: '👩‍🦱' },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  { q: 'What are your opening hours?',        a: 'We\'re open 7 AM – 10 PM, Monday to Sunday. Fresh snacks all day!' },
  { q: 'Do you offer home delivery?',         a: 'Yes! Contact us on WhatsApp at 9627285781 for local delivery.' },
  { q: 'Are the ingredients fresh daily?',    a: 'Absolutely! We source fresh vegetables and ingredients every single morning.' },
  { q: 'Do you take bulk orders?',            a: 'Yes, we accept bulk orders for events, parties and offices. Call us 24 hours in advance.' },
  { q: 'Is the food suitable for vegetarians?',a: '100% vegetarian! All our dishes are prepared without any non-veg ingredients.' },
];

// ─── Gallery Emojis ───────────────────────────────────────────────────────────
export const galleryEmojis = ['🥟', '🍔', '🥢', '🍜', '🧆', '🍤', '🥡', '🍞', '🫛'];
export const galleryColors  = ['#FF6B00','#FFB800','#2ECC71','#9B59B6','#E74C3C','#3498DB','#F39C12','#1ABC9C','#E67E22'];

// ─── Shop Combos ──────────────────────────────────────────────────────────────
export const combos = [
  { name: 'Samosa Combo',       items: '2 Samosas + Chai',                       price: '₹30',  emoji: '🥟☕', tag: 'Best Value' },
  { name: 'Burger Duo',         items: '2 Burgers + Sauce',                      price: '₹45',  emoji: '🍔🍔', tag: 'Popular'   },
  { name: 'Momo Feast',         items: 'Full Momos + Chutney',                   price: '₹65',  emoji: '🥢🌶️', tag: 'Fan Fav'  },
  { name: 'Snack Party Pack',   items: 'Mix Pakoda 500g',                        price: '₹100', emoji: '🧆🎉', tag: 'Party'    },
  { name: 'Family Combo',       items: 'Chowmein + 6 Momos + 4 Samosas',        price: '₹90',  emoji: '👨‍👩‍👧🍜', tag: 'Family' },
  { name: 'Street Food Box',    items: 'Pakoda + Bread Pakoda + Samosa',         price: '₹40',  emoji: '📦🍤', tag: 'Variety'  },
];

// ─── Shop Offer Banners ───────────────────────────────────────────────────────
export const shopOffers = [
  { title: 'Buy 2 Burgers Get 1 Free 🍔',    sub: 'Every day offer — valid on all burgers',              bg: '#FF6B00' },
  { title: 'Weekend Special Momos @ ₹25 🥢', sub: 'Saturday & Sunday only — limited quantity',           bg: '#9B59B6' },
  { title: 'Morning Combo Deal ☕',           sub: 'Samosa + Chai for just ₹20 before 10 AM',            bg: '#2ECC71' },
];

// ─── About Values ─────────────────────────────────────────────────────────────
export const aboutValues = [
  { icon: '🏆', title: 'Quality First',  desc: 'Never compromise on taste or hygiene' },
  { icon: '💰', title: 'Fair Pricing',   desc: 'Affordable for every pocket' },
  { icon: '⚡', title: 'Speed',           desc: 'Your food ready in minutes' },
  { icon: '❤️', title: 'Community',      desc: 'We are your neighbors & family' },
];

// ─── Contact Info ─────────────────────────────────────────────────────────────
export const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Dudhla Adda, Bilaspur Road' },
  { icon: '📞', label: 'Phone',   value: '9627285781' },
  { icon: '📧', label: 'Email',   value: 'Shivang9627285781@gmail.com' },
  { icon: '⏰', label: 'Hours',   value: '7:00 AM – 10:00 PM, All Days' },
];

// ─── Opening Hours ────────────────────────────────────────────────────────────
export const openingHours = [
  ['Mon – Fri', '7:00 AM – 10:00 PM'],
  ['Saturday',  '7:00 AM – 10:30 PM'],
  ['Sunday',    '8:00 AM – 9:00 PM'],
];

// ─── Nav Pages ────────────────────────────────────────────────────────────────
export const navPages = ['Home', 'Menu', 'Shop', 'About', 'Contact'];
