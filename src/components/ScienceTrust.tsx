const ScienceTrust = () => {
  return (
    <section className="py-20 bg-muted/30 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Replace with actual partner/science logos in a real app */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="font-cosmic text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">Vedic Labs</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="font-cosmic text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">Quantum AI</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="font-cosmic text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">N-Science</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="font-cosmic text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">SHIVA OS</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </div>
        </div>
        <p className="text-center mt-10 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          Backed by ancient wisdom and validated by modern scientific research
        </p>
      </div>
    </section>
  );
};

export default ScienceTrust;
