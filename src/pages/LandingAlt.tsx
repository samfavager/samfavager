const LandingAlt = () => {
  return (
    <div className="min-h-screen w-full flex items-start" style={{ backgroundColor: '#D4834E' }}>
      <div className="px-8 md:px-16 py-16 md:py-24">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6"
          style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif" }}
        >
          Cortez
        </h1>
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4"
          style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif" }}
        >
          venture catalysts
        </p>
        <p
          className="text-sm md:text-base lg:text-lg text-black max-w-2xl leading-relaxed"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Bridging the gap between mature business models and advancing technologies.
          <br />
          Specializes in designing, building and commercializing new products and services.
        </p>
      </div>
    </div>
  );
};

export default LandingAlt;
