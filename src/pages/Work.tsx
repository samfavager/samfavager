import { Link } from "react-router-dom";
import { ArrowLeft, Download, Briefcase } from "lucide-react";

const workHistory = [
  {
    year: "2022 - Present",
    role: "Senior Product Manager",
    company: "Tech Company",
    description: "Leading product strategy for core platform features.",
  },
  {
    year: "2019 - 2022",
    role: "Product Manager",
    company: "Startup Inc",
    description: "Built and scaled consumer-facing products from 0 to 1M users.",
  },
  {
    year: "2017 - 2019",
    role: "Associate Product Manager",
    company: "Enterprise Corp",
    description: "Managed B2B product features and integrations.",
  },
  {
    year: "2015 - 2017",
    role: "Business Analyst",
    company: "Consulting Firm",
    description: "Strategy and operations consulting for Fortune 500 clients.",
  },
];

const portfolioItems = [
  {
    title: "Platform Redesign",
    category: "Product Strategy",
    description: "Led complete platform overhaul increasing user engagement by 40%.",
  },
  {
    title: "Mobile App Launch",
    category: "0 to 1",
    description: "Launched mobile app reaching 500K downloads in first quarter.",
  },
  {
    title: "API Marketplace",
    category: "B2B Product",
    description: "Built developer ecosystem generating $2M ARR.",
  },
  {
    title: "Growth Experiments",
    category: "Experimentation",
    description: "Ran 50+ experiments improving conversion by 25%.",
  },
];

const Work = () => {
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
        <h1 className="text-xl font-bold text-amber-400">Work</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* Resume Download */}
        <section className="mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </a>
        </section>

        {/* Work Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-amber-400" />
            Work History
          </h2>
          <div className="relative border-l-2 border-amber-400/30 pl-8 space-y-10">
            {workHistory.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] w-4 h-4 bg-amber-400 rounded-full" />
                <span className="text-amber-400 text-sm font-medium">{item.year}</span>
                <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                <p className="text-white/60 font-medium">{item.company}</p>
                <p className="text-white/70 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-amber-400 text-sm font-medium">{item.category}</span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-white/70 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
