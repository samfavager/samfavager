const Marquee = () => {
  const items = [
    "Product Strategy",
    "•",
    "User Research",
    "•",
    "Agile/Scrum",
    "•",
    "Roadmapping",
    "•",
    "Data Analysis",
    "•",
    "Cross-functional Leadership",
    "•",
    "A/B Testing",
    "•",
    "Stakeholder Management",
    "•",
  ];

  return (
    <div className="overflow-hidden py-6 border-y border-border/50 bg-card/30">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`mx-4 text-sm font-medium ${
              item === "•" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
