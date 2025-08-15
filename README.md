# OritechAI — AI Consulting & Business Audits Website

A production-ready Next.js website for AI consulting and business audits with background video, Calendly integration, and optimized SEO.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎥 Background Video Setup

**IMPORTANT:** Replace the background video file:

1. **Video File Location:** `/public/Robot Website.mp4`
2. **Requirements:**
   - Format: MP4 (H.264 codec recommended)
   - Recommended size: Under 10MB for fast loading
   - Aspect ratio: 16:9 for best coverage
   - Duration: 10-30 seconds (will auto-loop)

3. **Fallback Image:** Add `/public/video-fallback.jpg` for browsers that don't support autoplay

## 📅 Calendly Configuration

The website is pre-configured with your Calendly link:
- **Current link:** `https://calendly.com/selenica3/30min`
- **Location:** `app/components/CalendlyEmbed.tsx`

To change the booking link:
```tsx
// In CalendlyEmbed.tsx, update this line:
src="https://calendly.com/YOUR-USERNAME/YOUR-EVENT?embed_domain=localhost&embed_type=Inline"
```

## 🎨 Brand Colors

The website uses your exact brand specifications:
- **Albanian Red:** `#E41E26` (Primary buttons, accents)
- **Pure Black:** `#000000` (Backgrounds, overlays)
- **Gold Accent:** `#FFD700` (Hover states, metrics)
- **Pure White:** `#FFFFFF` (ALL text - globally enforced)

## 📝 Content Customization

### Case Study Metrics
Update the case study numbers in `app/page.tsx`:
```tsx
// Case Study Section - update these metrics:
<div className="text-4xl font-bold text-gold-accent mb-2">8h → 2m</div>
<div className="text-4xl font-bold text-gold-accent mb-2">10h/wk → 0</div>
<div className="text-4xl font-bold text-gold-accent mb-2">+18%</div>
```

### Testimonials
Replace placeholder testimonials in `app/page.tsx`:
```tsx
// Update client names and quotes in the Testimonials section
<p className="text-gold-accent font-semibold">Your Client Name, Title</p>
```

### Contact Information
Update contact details in the footer:
```tsx
// In the Footer section
<p className="text-pure-white">your-email@oritechai.com</p>
<p className="text-pure-white">+1 (XXX) XXX-XXXX</p>
```

## 🔍 SEO Configuration

### Meta Tags
Update in `app/layout.tsx`:
```tsx
verification: {
  google: 'your-actual-google-site-verification-code',
}
```

### Open Graph Image
Add your OG image at `/public/og-image.jpg` (1200x630px recommended)

### Canonical URL
The site is configured for `https://oritechai.com` - update if your domain differs.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Deploy to Other Hosts
The project exports as static files in the `out` directory after `npm run build`.

## 📱 Features Included

- ✅ **Mobile-first responsive design**
- ✅ **Background video with fallback**
- ✅ **Calendly booking integration**
- ✅ **Smooth scroll navigation**
- ✅ **SEO optimized** (meta tags, sitemap, robots.txt)
- ✅ **Accessibility compliant** (WCAG contrast ratios)
- ✅ **Performance optimized** (lazy loading, compression)
- ✅ **TypeScript** for type safety

## 🎯 Page Sections

1. **Hero** - Main headline with CTA buttons
2. **Problem** - Pain points and solution intro
3. **Services** - 3 service cards with icons
4. **Why OritechAI** - 3 key differentiators
5. **Process** - 4-step methodology
6. **Case Study** - Real results with metrics
7. **Testimonials** - Client quotes
8. **Booking** - Embedded Calendly widget
9. **Footer** - Contact info and links

## 🔧 Customization Tips

### Change Colors
All colors are defined in `tailwind.config.js`:
```js
colors: {
  'albanian-red': '#E41E26',
  'pure-black': '#000000',
  'pure-white': '#FFFFFF',
  'gold-accent': '#FFD700',
}
```

### Add New Sections
Follow the existing pattern in `app/page.tsx`:
```tsx
<section id="your-section" className="section">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</section>
```

### Update Navigation
Add new nav items in `app/components/Navigation.tsx`:
```tsx
const navigation = [
  { name: 'Your Section', href: '#your-section' },
  // ... existing items
]
```

## 📞 Support

This is a complete, production-ready website. All core functionality is implemented and tested.

For technical support or customizations, refer to the Next.js and TailwindCSS documentation.