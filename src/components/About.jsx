export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-emerald-800/90">
              At FlowSense, we empower destinations with real-time situational awareness and intelligent decision-making. We turn visual and environmental data into actionable insights — enabling tourism authorities and event organizers to ensure safety, efficiency, and a seamless visitor experience across the Kingdom.
            </p>
            <p className="mt-4 text-emerald-800/90">
              Inspired by Saudi Vision 2030, FlowSense envisions a future where every Saudi landmark becomes an intelligent, data-driven environment. We aim to elevate tourism through innovation, creating a smarter, safer, and more sustainable experience for millions of visitors worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-emerald-900">Our Approach</h3>
            <p className="mt-3 text-emerald-800/90">
              FlowSense combines AI Vision and IoT Analytics within the Cumulocity IoT platform to interpret movement, anticipate crowd patterns, and automate responses. Our technology transforms observation into prediction, allowing proactive crowd management before challenges arise.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-emerald-900">Our Impact</h3>
            <p className="mt-3 text-emerald-800/90">
              From large-scale festivals to cultural landmarks, our platform ensures controlled density, safer environments, and enhanced visitor satisfaction — driving operational excellence and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
