import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Define your vision, roadmap, and go-to-market strategy with clarity and purpose."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Build and mentor high-performing product teams that ship with confidence."
  },
  {
    icon: Rocket,
    title: "Product-Market Fit",
    description: "Validate ideas, run experiments, and find the path to sustainable growth."
  },
  {
    icon: TrendingUp,
    title: "Scale & Growth",
    description: "Optimize processes and metrics to scale from startup to established business."
  }
];

const HowICanHelp = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">How I Can Help</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          As a fractional CPO/Product Director, I partner with founders and teams to build products 
          that users love and businesses that thrive.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Engagement Models</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Advisory</h3>
              <p className="text-sm text-muted-foreground">
                Strategic guidance and mentorship for founders navigating product decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Fractional</h3>
              <p className="text-sm text-muted-foreground">
                Part-time embedded leadership to build and scale your product function.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Project-Based</h3>
              <p className="text-sm text-muted-foreground">
                Focused engagements for specific initiatives like strategy sprints or team setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowICanHelp;
