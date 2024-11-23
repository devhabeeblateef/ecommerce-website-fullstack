# E-Commerce Website

This is a fully-featured, modern e-commerce web application built with cutting-edge technologies, providing a seamless shopping experience.

## 🚀 Features

- **Frontend Framework**: Next.js 15  
- **CMS**: Sanity.io  
- **React**: React 19  
- **Component Library**: ShadCN  
- **Styling**: Tailwind CSS  
- **Authentication**: Clerk Auth (Passkeys, Gmail Auth)  
- **Payment Gateway**: Stripe  
- **State Management**: Zustand  
- **Language**: TypeScript  

## 🌐 Live Demo  
Explore the live version of the application:  
[E-Commerce App](https://ecommerce-app-ecru-nu.vercel.app/)

## 🛠️ Installation Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecommerce-project
```

### 2. Navigate to the Client Directory
```bash
cd client
```

### 3. Install Dependencies
Make sure you have `npm` or `yarn` installed. Run:
```bash
npm install
# or
yarn install
```

### 4. Set Environment Variables
Create a `.env.local` file in the `client/` directory and configure the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key

CLERK_API_KEY=your_clerk_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
SANITY_DATASET=your_sanity_dataset
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_API_TOKEN=your_sanity_api_token
```

### 5. Start the Development Server
Run the following command to start the application locally:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`.

### 6. Build for Production
To build the application for production, run:
```bash
npm run build
# or
yarn build
```

### 7. Deployment
The application is ready to deploy to platforms like Vercel or Netlify.  

## 📚 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS  
- **Backend**: Sanity.io for CMS  
- **Authentication**: Clerk Auth  
- **Payments**: Stripe  
- **State Management**: Zustand  
- **Language**: TypeScript  

## 🧪 Testing
You can use the demo link to test authentication, explore the product catalog, and process payments using test cards provided by Stripe.

## 🤝 Contributing
Contributions are welcome! If you have suggestions or want to report an issue, feel free to open an issue or submit a pull request.

---

**Happy Coding!** 🛍️
