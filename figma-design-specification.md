# E-Commerce Gaming Platform - Figma Design Specification

## Project Overview
A modern e-commerce platform specializing in gaming items, loot boxes, and collectibles with a focus on user experience and visual appeal.

## Design System

### Color Palette
- **Primary Blue**: #2563EB (Blue-600)
- **Secondary Green**: #10B981 (Green-500)
- **Accent Pink**: #EC4899 (Pink-500)
- **Neutral Gray**: #6B7280 (Gray-500)
- **Background Light**: #F9FAFB (Gray-50)
- **Background White**: #FFFFFF
- **Text Dark**: #111827 (Gray-900)
- **Text Medium**: #374151 (Gray-700)
- **Text Light**: #6B7280 (Gray-500)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: 
  - H1: 48px, Bold, Line-height: 1.2
  - H2: 36px, Bold, Line-height: 1.3
  - H3: 24px, Semibold, Line-height: 1.4
  - H4: 20px, Semibold, Line-height: 1.4
- **Body Text**: 16px, Regular, Line-height: 1.6
- **Small Text**: 14px, Regular, Line-height: 1.5

### Spacing System
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

## Page Layouts

### 1. Homepage Design

#### Header Section
- **Height**: 80px
- **Background**: White with subtle shadow
- **Logo**: Left-aligned, 32px height
- **Search Bar**: Centered, 400px width with category dropdown
- **Navigation**: Right-aligned with cart, orders, messages icons
- **User Menu**: Profile dropdown with notifications

#### Hero Section
- **Layout**: 3-column grid (3-6-3)
- **Left Sidebar**: Category navigation with icons
- **Center**: Hero banner with gradient background
  - Background: Linear gradient (teal-50 to blue-50)
  - CTA Button: Green with hover effects
  - Product previews: 3 circular images
- **Right Sidebar**: User actions and promotional cards

#### Deals Section
- **Background**: White
- **Countdown Timer**: 5 circular time blocks
- **Product Grid**: 5-column layout with discount badges
- **Hover Effects**: Scale and shadow transitions

#### Category Sections
- **Layout**: 4-column grid with category banner
- **Left Banner**: Category image with CTA button
- **Product Grid**: 3-4 column responsive layout
- **Product Cards**: Image, title, price with hover effects

#### Newsletter Section
- **Background**: Gray-50
- **Form**: Email input with subscribe button
- **Layout**: Centered, max-width 400px

### 2. Product Listing Page

#### Filters Sidebar
- **Width**: 280px
- **Categories**: Expandable tree structure
- **Price Range**: Slider component
- **Rarity Filter**: Color-coded rarity levels
- **Game Type**: Checkbox list
- **Clear Filters**: Button at bottom

#### Product Grid
- **Layout**: 4-column responsive grid
- **Product Cards**: 
  - Image container: 300px height
  - Rarity border: Color-coded (Common: Gray, Rare: Blue, Epic: Purple, Legendary: Gold)
  - Stats display: Small icons for attack/defense/speed/magic
  - Price: Large, bold text
  - Add to Cart: Full-width button

#### Sort Options
- **Dropdown**: Price, Name, Rarity, Newest
- **View Toggle**: Grid/List view icons

### 3. Product Detail Page

#### Product Images
- **Main Image**: 500px × 500px
- **Thumbnail Gallery**: 4 small images below
- **Zoom Functionality**: Hover to enlarge

#### Product Information
- **Title**: Large, bold text
- **Rarity Badge**: Color-coded with icon
- **Price**: Large, prominent display
- **Stats Grid**: 4-column layout for attack/defense/speed/magic
- **Description**: Expandable text
- **Game Compatibility**: Tags for supported games

#### Purchase Section
- **Quantity Selector**: +/- buttons with number input
- **Add to Cart**: Large, prominent button
- **Buy Now**: Secondary button
- **Stock Status**: Real-time availability

#### Related Products
- **Carousel**: Horizontal scroll with 4-5 items
- **Similar Items**: Based on category and rarity

### 4. Shopping Cart Page

#### Cart Items
- **Layout**: List format with product image, details, quantity, price
- **Remove Button**: Small trash icon
- **Quantity Adjuster**: +/- buttons
- **Subtotal**: Per item calculation

#### Cart Summary
- **Sidebar**: Fixed position, 320px width
- **Subtotal**: Large text
- **Shipping**: Dropdown selection
- **Tax**: Calculated amount
- **Total**: Bold, large text
- **Checkout Button**: Full-width, prominent

### 5. User Dashboard

#### Profile Section
- **Avatar**: Large circular image
- **User Info**: Name, email, join date
- **Edit Profile**: Button to open modal

#### Inventory Section
- **Grid Layout**: 6-column responsive
- **Item Cards**: Similar to product cards but smaller
- **Trade Button**: For tradeable items
- **Rarity Indicators**: Color-coded borders

#### Order History
- **Table Format**: Order ID, Date, Status, Total
- **Status Badges**: Color-coded (Pending, Shipped, Delivered)
- **View Details**: Link to order page

### 6. Admin Panel

#### Dashboard Overview
- **Stats Cards**: 4-column grid
  - Total Sales, Orders, Users, Products
- **Charts**: Sales trend, popular products
- **Recent Orders**: Table with actions

#### Product Management
- **Add Product Form**: Multi-step wizard
- **Product List**: Table with edit/delete actions
- **Bulk Actions**: Select multiple items

#### User Management
- **User List**: Table with user details
- **Role Management**: Admin/User toggle
- **Activity Log**: User actions history

## Component Library

### Buttons
- **Primary**: Blue background, white text, rounded corners
- **Secondary**: White background, blue border, blue text
- **Danger**: Red background, white text
- **Success**: Green background, white text
- **Ghost**: Transparent background, colored text

### Cards
- **Product Card**: White background, shadow, rounded corners
- **Info Card**: Colored background, white text
- **Stats Card**: Gradient background, large numbers

### Forms
- **Input Fields**: Rounded borders, focus states
- **Dropdowns**: Custom styled select elements
- **Checkboxes**: Custom styled with animations
- **Radio Buttons**: Custom styled with smooth transitions

### Modals
- **Overlay**: Semi-transparent background
- **Content**: White background, rounded corners, shadow
- **Close Button**: Top-right corner
- **Actions**: Bottom-right aligned buttons

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile Adaptations
- **Navigation**: Hamburger menu
- **Product Grid**: 2-column layout
- **Filters**: Collapsible sidebar
- **Cart**: Full-width layout

## Interactive Elements

### Hover Effects
- **Product Cards**: Scale up 5%, shadow increase
- **Buttons**: Background color change
- **Links**: Text color change
- **Images**: Slight zoom effect

### Loading States
- **Skeleton Screens**: Placeholder content
- **Spinners**: Circular loading indicators
- **Progress Bars**: For multi-step processes

### Animations
- **Page Transitions**: Fade in/out effects
- **Modal Open/Close**: Slide and fade animations
- **Cart Updates**: Bounce effect on cart icon
- **Notifications**: Slide in from top

## Accessibility

### Color Contrast
- **Text**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **UI Elements**: Minimum 3:1 ratio

### Keyboard Navigation
- **Tab Order**: Logical flow through elements
- **Focus Indicators**: Clear visual feedback
- **Skip Links**: Jump to main content

### Screen Reader Support
- **Alt Text**: Descriptive image descriptions
- **ARIA Labels**: Proper element labeling
- **Semantic HTML**: Proper heading structure

## File Structure for Figma

```
E-Commerce Gaming Platform/
├── 🎨 Design System/
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Components
├── 📱 Pages/
│   ├── Homepage
│   ├── Product Listing
│   ├── Product Detail
│   ├── Cart
│   ├── Checkout
│   ├── User Dashboard
│   └── Admin Panel
├── 🧩 Components/
│   ├── Navigation
│   ├── Product Cards
│   ├── Forms
│   ├── Buttons
│   └── Modals
└── 📐 Responsive/
    ├── Mobile
    ├── Tablet
    └── Desktop
```

## Implementation Notes

### Development Priority
1. **Phase 1**: Core pages (Home, Products, Cart)
2. **Phase 2**: User authentication and dashboard
3. **Phase 3**: Admin panel and advanced features
4. **Phase 4**: Gaming-specific features (loot boxes, trading)

### Performance Considerations
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Route-based chunking
- **Caching**: Product data and user preferences
- **CDN**: Static assets delivery

### SEO Optimization
- **Meta Tags**: Dynamic titles and descriptions
- **Structured Data**: Product schema markup
- **URL Structure**: Clean, descriptive paths
- **Sitemap**: Auto-generated XML sitemap

This design specification provides a comprehensive foundation for creating a modern, user-friendly e-commerce platform with gaming features. The design emphasizes usability, visual appeal, and performance while maintaining accessibility standards.
