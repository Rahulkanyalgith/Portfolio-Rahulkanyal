export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js 14",
    excerpt: "Discover the latest features of Next.js 14 and how they can help you build faster, more efficient web applications with server components and improved performance.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Web Performance"],
    publishedDate: "2024-12-15",
    readTime: "8 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  },
  {
    id: "2",
    title: "Getting Started with AI and Large Language Models",
    excerpt: "An introduction to the world of AI and LLMs, exploring how developers can integrate these powerful technologies into modern applications.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "AI & Machine Learning",
    tags: ["AI", "LLM", "Machine Learning", "GPT"],
    publishedDate: "2024-12-10",
    readTime: "12 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  },
  {
    id: "3",
    title: "Modern CSS Techniques: Gradients and Animations",
    excerpt: "Learn how to create stunning visual effects using CSS gradients, animations, and transitions to make your web applications stand out.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "CSS & Design",
    tags: ["CSS", "Design", "Animations", "UI/UX"],
    publishedDate: "2024-12-05",
    readTime: "6 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  },
  {
    id: "4",
    title: "MERN Stack Best Practices for 2025",
    excerpt: "Essential best practices and patterns for building robust full-stack applications using MongoDB, Express, React, and Node.js.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "Full Stack",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    publishedDate: "2024-12-01",
    readTime: "10 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  },
  {
    id: "5",
    title: "Understanding TypeScript Generics",
    excerpt: "Deep dive into TypeScript generics and how they can help you write more reusable and type-safe code in your projects.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "TypeScript",
    tags: ["TypeScript", "Programming", "Type Safety"],
    publishedDate: "2024-11-28",
    readTime: "7 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  },
  {
    id: "6",
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Learn advanced techniques to optimize your React applications, from code splitting to memoization and lazy loading components.",
    content: "",
    coverImage: "/projects/Screenshot2024-12-04195218.png",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Web Development"],
    publishedDate: "2024-11-25",
    readTime: "9 min read",
    author: {
      name: "Rahul Kanyal",
      avatar: "/profile.jpg"
    }
  }
];
