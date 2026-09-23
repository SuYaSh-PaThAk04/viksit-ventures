import { audiences, founders, offerings, plan, site, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero" id="top">
        <p className="eyebrow on-dark">Startup ecosystem · For the Viksit Bharat of 2047</p>
        <h1>
          Viksit <span>Ventures</span>
        </h1>
        <p className="tagline">Viksit Startups for a Viksit Bharat.</p>
        <p className="lede">
          A startup ecosystem being built for the India of 2047 - backing the founders taking on
          the nation&apos;s core problems, with workspace, labs, hiring, grants, network and investor
          access behind them from day one.
        </p>
        <div className="hero-actions">
          <a className="btn" href={site.emailHref}>
            {site.email}
          </a>
          <p className="btn-note">Startups, partners and investors - write to us.</p>
        </div>
      </section>

      <section className="section" id="journey">
        <h2>The journey in action.</h2>
        <div className="grid grid-3">
          {stats.map((stat) => (
            <article className="card" key={stat.figure + stat.label}>
              <h3>
                {stat.figure} {stat.label}
              </h3>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="offerings">
        <p className="eyebrow">What startups get</p>
        <h2>Six things behind every startup.</h2>
        <div className="grid">
          {offerings.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="plan">
        <p className="eyebrow">The game plan</p>
        <h2>A year-based plan, one direction.</h2>
        <ol className="path">
          {plan.map((step) => (
            <li className="step" key={step.when}>
              <span>{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="founders">
        <p className="eyebrow">Founders</p>
        <h2>4 years building together.</h2>
        <div className="grid">
          {founders.map((person) => (
            <article className="card person" key={person.name}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p className="role">{person.role}</p>
              <ul>
                {person.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="together">
          <span>What we&apos;ve done together</span>
          <p>
            3+ products shipped · 10+ community brands built · 10 startups helped to seed funding
            in grants - 4 years of work, side by side.
          </p>
        </div>
      </section>

      <section className="thesis">
        <span>2047 Vision</span>
        <p>
          Behind everything we build: founders solving real-world problems for a Viksit Bharat -
          water to fintech, deep tech to mobility, metros to Bharat&apos;s smallest towns.
        </p>
      </section>

      <section className="cta" id="contact">
        <h2>Build with Viksit Ventures</h2>
        <p className="audiences">{audiences.join(" · ")}</p>
        <a className="btn" href={site.emailHref}>
          Get in touch - {site.email}
        </a>
        <p className="contact">
          Contact · <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </section>

      <p className="footer">
        {site.company} · {site.domain}
      </p>
    </main>
  );
}
