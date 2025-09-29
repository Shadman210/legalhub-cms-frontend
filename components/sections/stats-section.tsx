"use client";

import { useScrollTriggeredCounter } from "@/hooks/use-scroll-triggered-counter";

export function StatsSection() {
  const stat1 = useScrollTriggeredCounter(50000, 2000);
  const stat2 = useScrollTriggeredCounter(2500, 2000);
  const stat3 = useScrollTriggeredCounter(15000, 2000);
  const stat4 = useScrollTriggeredCounter(98, 2000);

  const stats = [
    { counter: stat1, suffix: "+", label: "people assisted", delay: "0s" },
    { counter: stat2, suffix: "", label: "legal professionals", delay: "0.5s" },
    {
      counter: stat3,
      suffix: "+",
      label: "documents processed per month",
      delay: "1s",
    },
    {
      counter: stat4,
      suffix: "%",
      label: "customer satisfaction",
      delay: "1.5s",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-secondary/5 to-primary/5 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-scale">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            LegalHub in Numbers
          </h2>
          <p className="text-muted-foreground">
            Innovation at the service of justice
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.counter.elementRef}
              className="space-y-2 startup-card p-6 rounded-lg animate-slide-in-up"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.counter.count.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
