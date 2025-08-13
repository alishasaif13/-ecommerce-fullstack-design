# ShopHub - E-Commerce Gaming Platform

A modern full-stack e-commerce platform specializing in gaming items, loot boxes, and collectibles with PKR payment support.

## 🚀 Features

### User Features
- **User Authentication**: Secure login/register with JWT
- **Product Browsing**: Browse products with filters and search
- **Shopping Cart**: Add/remove items with quantity management
- **Order Management**: Place orders with PKR payment options
- **User Dashboard**: View order history and profile
- **Gaming Items**: Specialized gaming products with rarity levels

### Admin Features
- **Admin Panel**: Complete product and order management
- **User Management**: View and manage user accounts
- **Order Analytics**: Track sales and order statistics
- **Inventory Management**: Manage product stock levels

### Payment Options
- **Cash on Delivery**
- **Bank Transfer**
- **Easypaisa**
- **JazzCash**

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React.js** with hooks
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Context API** for state management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd fullstack/backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shopHub
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

4. **Database Setup**
```bash
# Start MongoDB (if using local)
mongod

# Run the setup script to create admin user and sample data
npm run setup
```

5. **Start the server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔐 Default Admin Credentials

After running the setup script, you can login with:

- **Email**: admin13@gmail.com
- **Password**: 12345

## 📁 Project Structure

```
fullstack/
├── backend/
│   ├── config/
│   │   ├── config.js
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── ...
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── user.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── ...
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── ...
│   ├── scripts/
│   │   ├── setupAdmin.js
│   │   └── seedData.js
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Navbar.jsx
    │   │   └── ...
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── ProductListingPage.jsx
    │   │   └── ...
    │   ├── contexts/
    │   │   ├── AuthContext.js
    │   │   └── CartContext.js
    │   ├── services/
    │   │   └── api.js
    │   └── App.js
    └── package.json
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured` - Get featured products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart (protected)
- `POST /api/cart/add` - Add item to cart (protected)
- `PUT /api/cart/update/:id` - Update cart item (protected)
- `DELETE /api/cart/remove/:id` - Remove item from cart (protected)

### Orders
- `POST /api/orders` - Create new order (protected)
- `GET /api/orders/myorders` - Get user orders (protected)
- `GET /api/orders/:id` - Get order by ID (protected)
- `PUT /api/orders/:id/pay` - Mark order as paid (protected)
- `PUT /api/orders/:id/deliver` - Mark order as delivered (admin)
- `PUT /api/orders/:id/status` - Update order status (admin)

## 🎮 Gaming Features

### Loot Box System
- **Rarity Levels**: Common, Uncommon, Rare, Epic, Legendary, Mythic
- **Item Types**: Weapon, Armor, Accessory, Consumable, Material, Currency, Special
- **Game Types**: RPG, FPS, MOBA, Strategy, Adventure, Sports, Other
- **Stats System**: Attack, Defense, Speed, Magic attributes

### Trading System
- Tradeable items between users
- Limited edition items
- Stock management

## 💰 Payment System

### PKR Support
- All prices in Pakistani Rupees (PKR)
- Multiple payment methods
- Secure transaction handling
- Order confirmation system

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Cross-origin request protection
- **Error Handling**: Comprehensive error handling

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables
2. Configure MongoDB connection
3. Run `npm install`
4. Start with `npm start`

### Frontend Deployment
1. Update API base URL in `src/services/api.js`
2. Run `npm run build`
3. Deploy the `build` folder

## 📝 Scripts

```bash
# Backend
npm run dev          # Start development server
npm start           # Start production server
npm run setup       # Setup admin user and sample data
npm run seed        # Seed database with sample data

# Frontend
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: admin13@gmail.com

## 🔄 Updates

### Recent Updates
- ✅ Fixed authentication system
- ✅ Added PKR payment support
- ✅ Implemented proper user registration
- ✅ Added admin user creation
- ✅ Enhanced order management
- ✅ Improved frontend-backend connection
- ✅ Added comprehensive error handling

### Upcoming Features
- 🔄 Real-time notifications
- 🔄 Advanced search filters
- 🔄 Wishlist functionality
- 🔄 Product reviews and ratings
- 🔄 Mobile app development
