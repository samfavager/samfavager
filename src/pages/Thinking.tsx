import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "The Art of Saying No",
    excerpt: "How ruthless prioritization became my superpower as a PM.",
    date: "Jan 2024",
    readTime: "5 min read",
  },
  {
    title: "Building for Builders",
    excerpt: "Why developer experience matters more than you think.",
    date: "Dec 2023",
    readTime: "8 min read",
  },
  {
    title: "The 10x Product Manager",
    excerpt: "It's not about working harder, it's about leverage.",
    date: "Nov 2023",
    readTime: "6 min read",
  },
  {
    title: "From Zero to One",
    excerpt: "Lessons learned launching products from scratch.",
    date: "Oct 2023",
    readTime: "7 min read",
  },
  {
    title: "The Metrics That Matter",
    excerpt: "Cutting through vanity metrics to find real signal.",
    date: "Sep 2023",
    readTime: "4 min read",
  },
  {
    title: "User Research Done Right",
    excerpt: "How to actually learn from your customers.",
    date: "Aug 2023",
    readTime: "6 min read",
  },
];

const Thinking = () => {
  return (
    <div className="min-h-screen bg-[#1a2a1a] text-white">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <h1 className="text-xl font-bold text-amber-400">Thinking</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-amber-400" />
            Thoughts & Writing
          </h2>
          <p className="text-white/60 mt-2">Ideas on product, strategy, and building things.</p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/70 mt-2">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Thinking;
