export default function StatsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="sr-only">Neverinstall in stats</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-0.5 md:text-center">
            <div className="text-4xl font-bold text-primary">90+</div>
            <p className="text-muted-foreground">Integrations</p>
          </div>
          <div className="space-y-0.5 md:text-center">
            <div className="text-4xl font-bold text-primary">56%</div>
            <p className="text-muted-foreground">Productivity Boost</p>
          </div>
          <div className="col-span-2 border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <p className="text-lg text-balance text-muted-foreground">
              Our platform continues to grow with developers and businesses
              using productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
