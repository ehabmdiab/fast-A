import { BlogCard } from "../../../components/BlogCard";

const blogPosts = [
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "Insights",
    title: "Maximizing Efficiency with Automation",
    description:
      "Discover how automation can transform your business processes for the better.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "John Doe",
      date: "11 Jan 2022",
      readTime: "5 min read",
    },
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "Automation",
    title: "The Future of AI in Business",
    description:
      "Explore the impact of AI on modern business strategies and operations.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Jane Smith",
      date: "12 Jan 2022",
      readTime: "5 min read",
    },
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "AI",
    title: "Streamlining Operations with Intelligent Automation",
    description:
      "Learn how intelligent automation can enhance operational efficiency and reduce costs.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Alice Johnson",
      date: "13 Jan 2022",
      readTime: "5 min read",
    },
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "Operations",
    title: "Client Success: Real-World Automation Impact",
    description:
      "See how our clients have achieved remarkable results through automation solutions.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Bob Brown",
      date: "14 Jan 2022",
      readTime: "5 min read",
    },
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "Success",
    title: "Understanding No-Code Automation Benefits",
    description:
      "Unlock the potential of no-code solutions for seamless automation in your business.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Charlie Davis",
      date: "15 Jan 2022",
      readTime: "5 min read",
    },
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    category: "No-Code",
    title: "The Role of AI in Customer Experience",
    description:
      "Discover how AI enhances customer interactions and drives satisfaction.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Eve Wilson",
      date: "16 Jan 2022",
      readTime: "5 min read",
    },
  },
];

export const BlogTopicsSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full  text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Explore Our Latest Insights
            </h1>
            <p className="md:text-md">
              Stay updated with our expert articles and tips.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              View all
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Automation Tips
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              AI Innovations
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Productivity Hacks
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Success Stories
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
