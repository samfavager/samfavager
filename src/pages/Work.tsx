import { Link } from "react-router-dom";
import { ArrowLeft, Download, Briefcase } from "lucide-react";

const workHistory = [
  {
    year: "January 2024 - Present",
    role: "Head of Product - Platform & SaaS Products",
    company: "Digimarc Corporation (NASDAQ: DMRC)",
    description: "Leading product management for cloud platform unification, mobile apps, and developer tools/SDKs. Grew subscription ARR by >50% at 85% gross profit margins.",
  },
  {
    year: "May 2022 - December 2023",
    role: "Senior Product Manager",
    company: "Digimarc Corporation (NASDAQ: DMRC)",
    description: "Led product strategy and GTM for Recycling software solutions, helping CPG brands transform plastic packaging recycling. Opened landmark pilots in France, Belgium, and Canada.",
  },
  {
    year: "September 2019 - May 2022",
    role: "Head of Software & Services / Senior PM, IoT",
    company: "Hilti",
    description: "Led IoT/asset tracking software portfolio for construction industry. Grew customers at 20% CAGR to 15,000+ users, ~£5m ARR, reducing churn to <10%.",
  },
  {
    year: "2018 - Present",
    role: "Co-Founder & Advisor",
    company: "PIN IoT Ltd.",
    description: "Identified market opportunity for asset tracking in commercial waste management. Successfully completed Startup Bootcamp accelerator; achieved product-market-fit and market leading position in UK niche.",
  },
  {
    year: "October 2017 - April 2018",
    role: "Product Director",
    company: "PLS Ltd.",
    description: "Led product strategy for industrial asset tracking startup incubated inside £1bn Bibby Line Group. Secured landmark projects with 3 UK retailers and 1 automotive manufacturer.",
  },
  {
    year: "October 2014 - October 2016",
    role: "Commercial Manager",
    company: "PLS Ltd.",
    description: "Commercial lead managing C-level sales engagements with ~25 enterprise accounts. Established new GTM models and channel partner relationships.",
  },
  {
    year: "June 2011 - October 2014",
    role: "Strategy Development Manager/Analyst",
    company: "Bibby Line Group",
    description: "Supported exec board in shaping strategy of £350m revenue portfolio. Conducted M&A due diligence including asset tracking software acquisition that catalyzed career pivot to product management.",
  },
];

const portfolioItems = [
  {
    title: "Cloud Platform Unification",
    category: "Platform Strategy",
    description: "Unified legacy platforms, mobile apps, and developer tools/SDKs post-acquisition at Digimarc.",
  },
  {
    title: "Recycling Tech Transformation",
    category: "0 to Market",
    description: "Pioneered plastic recycling software solutions with major CPG brands across Europe and Canada.",
  },
  {
    title: "IoT Asset Tracking Portfolio",
    category: "B2B Product",
    description: "Built and scaled IoT software portfolio for construction industry to 15,000+ users and £5m ARR.",
  },
  {
    title: "PIN IoT Startup",
    category: "Entrepreneurship",
    description: "Co-founded asset tracking solution achieving product-market-fit and market leadership in UK waste management.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <h1 className="text-xl font-bold text-primary">Work</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* Resume Download */}
        <section className="mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </a>
        </section>

        {/* Work Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            Work History
          </h2>
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
            {workHistory.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                <span className="text-primary text-sm font-medium">{item.year}</span>
                <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                <p className="text-muted-foreground font-medium">{item.company}</p>
                <p className="text-foreground/70 mt-2">{item.description}</p>
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
                className="bg-card border border-border rounded-xl p-6 hover:bg-secondary transition-colors cursor-pointer"
              >
                <span className="text-primary text-sm font-medium">{item.category}</span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
