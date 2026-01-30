import { Link } from "react-router-dom";
import { ArrowLeft, Send, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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
        <h1 className="text-xl font-bold text-amber-400">Contact</h1>
      </header>

      <main className="max-w-xl mx-auto px-6 pb-20">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-white/60 mt-2">I'd love to hear from you.</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-amber-400">Message Sent!</h3>
            <p className="text-white/70 mt-2">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default Contact;
