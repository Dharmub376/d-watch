# D-Watch

A premium watch e-commerce website built with modern web technologies to showcase and sell high-quality timepieces. This project features a responsive design with engaging UI components including product displays, testimonials, blog sections, and more.

## 🚀 Features

- **Modern Next.js Architecture** - Built with Next.js 14+ for optimal performance and SEO
- **Responsive Design** - Mobile-first approach ensuring great user experience across all devices
- **Dynamic Components** - Rich interactive components including hero sections, product galleries, and testimonials
- **Product Showcase** - Dedicated sections for best sellers, our products, and featured collections
- **Blog Integration** - Content management with blog section for articles and updates
- **FAQ & Support** - Comprehensive FAQ section and customer support information
- **Smooth Animations** - GSAP-powered animations for enhanced user engagement
- **Social Proof** - Customer testimonials and partner logos for credibility

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (React 18+)
- **Language**: TypeScript
- **Styling**: CSS Modules + Custom CSS
- **Animations**: GSAP, Animate.css, WOW.js
- **UI Components**: Bootstrap, Swiper, Slicknav
- **Utilities**: jQuery, Magnific Popup

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd d-watch
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── OurProducts.tsx # Product showcase
│   ├── BestSellers.tsx # Best-selling items
│   ├── Blog.tsx        # Blog section
│   ├── Testimonials.tsx # Customer reviews
│   ├── Footer.tsx      # Footer component
│   └── ...other components
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx           # Home page

public/
├── css/               # Stylesheets (Bootstrap, custom, animations)
├── js/                # JavaScript libraries and utilities
├── fonts/             # Custom fonts
├── images/            # Image assets
└── media/             # Video and media files
```

## ✏️ Development

Edit components in `app/components/` or the main page in `app/page.tsx`. The page auto-updates as you make changes thanks to Next.js fast refresh.

### Customization

- **Styling**: Modify CSS files in `public/css/` or component-specific styles in `.module.css` files
- **Content**: Update component content directly in the component files
- **Images**: Add images to `public/images/` and reference them in your components

## 🎨 Key Components

- **Header**: Navigation and branding
- **Hero**: Eye-catching landing section with call-to-action
- **OurProducts**: Main product display section
- **BestSellers**: Featured best-selling watches
- **Testimonials**: Customer reviews and feedback
- **Blog**: Articles and news updates
- **FAQ**: Frequently asked questions
- **Footer**: Links and company information

## 🚀 Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```

The build creates an optimized version ready for deployment.

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## 🌐 Deployment

The easiest way to deploy is with [Vercel](https://vercel.com), the platform created by the Next.js team:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will auto-detect Next.js and configure settings
4. Deploy with a single click

For other deployment options, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is open source and available for use.
