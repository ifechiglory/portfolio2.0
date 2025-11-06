# 🚀Portfolio

A sophisticated fullstack portfolio built with cutting-edge technologies featuring a dynamic content management system and stunning glassmorphism design.

![Portfolio Preview](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Modern+Developer+Portfolio)

## ✨ Features

### 🎨 Frontend Excellence

- **Modern Glassmorphism UI** - Sleek, translucent design elements

- **Smooth Animations** - Powered by Framer Motion for engaging interactions

- **Responsive Design** - Flawless experience across all devices

- **TypeScript** - Type-safe, maintainable codebase

- **Fast Development** - Vite build tool for optimal performance

### ⚡ Admin Dashboard

- **Project Management** - Upload, edit, and manage portfolio projects

- **Media Handling** - Seamless image uploads with Cloudinary

- **Real-time Updates** - Instant content synchronization

- **Secure Authentication** - Protected admin interface

### 🛠 Fullstack Capabilities

- **Supabase Backend** - Robust database and authentication

- **RESTful APIs** - Efficient data management

- **Cloud Integration** - Scalable media storage solution

## 🚀 Tech Stack

**Frontend:**

- ![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)

- ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)

- ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)

- ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)

- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?logo=framer)

**Backend & Services:**

- ![Supabase](https://img.shields.io/badge/Supabase-Latest-3ECF8E?logo=supabase)

- ![Cloudinary](https://img.shields.io/badge/Cloudinary-Latest-3448C5?logo=cloudinary)

## 📦 Installation

1. **Clone the repository**

```bash
git clone <https://github.com/ifechiglory/portfolio2.0.git>
cd portfolio2.0
```

2. **Install dependencies**

```bash

npm install

```

3. **Environment Setup**

   Create a `.env` file with your credentials:

```txt
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. **Start development server**

```bash
npm run dev
```

## 🏗 Project Structure

```txt
portfolio2.0/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main page components
│   ├── admin/         # Admin dashboard components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── lib/           # External library configurations
├── public/            # Static assets
└── supabase/          # Database schema and configurations

```

## 🎯 Usage

### For Visitors

- Browse portfolio projects and case studies

- View skills and experience

- Contact through integrated forms

- Enjoy smooth, animated interactions

### For Admin

1. Access `/admin` route

2. Authenticate with Supabase

3. Manage portfolio content:

- Add new projects with images

- Update existing project information

- Upload media to Cloudinary

- Control project visibility

## 🔧 Configuration

### Supabase Setup

1. Create a Supabase project

2. Set up database tables for projects, skills, etc.

3. Configure Row Level Security (RLS) policies

4. Add your credentials to environment variables

### Cloudinary Setup

1. Create Cloudinary account

2. Configure upload presets

3. Set up allowed formats and transformations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Your Preferred Platform

- **Vercel**: `vercel --prod`

- **Netlify**: Drag and drop the `dist` folder

- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and enhancement requests.

1. Fork the project

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub: [@ifechiglory](https://github.com/ifechiglory)
- Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) team for the amazing framework

- [Supabase](https://supabase.com/) for the excellent backend service

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

⭐ Star this repo if you found it helpful!

---

*Built with ❤️ using React, TypeScript, and modern web technologies.*
