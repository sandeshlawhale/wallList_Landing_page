"use client"

export function TrustedBy() {
  const logos = [
    { name: "Acme", src: "/acme-products.png" },
    { name: "Globex", src: "/globex-building.png" },
    { name: "Umbrella", src: "/colorful-umbrellas.png" },
    { name: "Initech", src: "/generic-office-building.png" },
    { name: "Soylent", src: "/soylent.png" },
  ]
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Trusted by teams at</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((l) => (
            <img
              key={l.name}
              src={l.src || "/placeholder.svg"}
              alt={`${l.name} logo`}
              className="mx-auto h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(124,77,255,0.35)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
