import { Header } from "@/components/header";
import { audiences, founders, offerings, plan, site, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow on-dark">Startup ecosystem · For the Viksit Bharat of 2047</p>
              <h1 className="hero-title">
                Viksit <em>Ventures</em>
              </h1>
              <p className="tagline">Viksit Startups for a Viksit Bharat.</p>
              <p className="lede">
                A startup ecosystem being built for the India of 2047 - backing the founders taking
                on the nation&apos;s core problems, with workspace, labs, hiring, grants, network and
                investor access behind them from day one.
              </p>
              <div className="hero-actions">
                <a className="btn" href={site.emailHref}>
                  {site.email}
                </a>
                <p className="btn-note">Startups, partners and investors - write to us.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="journey">
          <div className="wrap sheet">
            <div className="section-head">
              <h2>The journey in action.</h2>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <article className="stat" key={stat.figure + stat.label}>
                  <h3>
                    <span className="figure">{stat.figure}</span>
                    <span className="stat-label">{stat.label}</span>
                  </h3>
                  <p>{stat.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band-tight" id="offerings">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What startups get</p>
              <h2>Six things behind every startup.</h2>
            </div>
            <div className="offers">
              {offerings.map((item, index) => (
                <article className="offer" key={item.title}>
                  <span className="offer-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="plan">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">The game plan</p>
              <h2>A year-based plan, one direction.</h2>
            </div>
            <ol className="path">
              {plan.map((step) => (
                <li className="step" key={step.when}>
                  <span className="when">{step.when}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band band-founders" id="founders">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Founders</p>
              <h2>4 years building together.</h2>
            </div>
            <div className="people">
              {founders.map((person) => (
                <article className="person" key={person.name}>
                  <img className="portrait" src={person.image} alt={person.name} />
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
              <p className="eyebrow on-dark">What we&apos;ve done together</p>
              <p>
                3+ products shipped · 10+ community brands built · 10 startups helped to seed
                funding in grants - 4 years of work, side by side.
              </p>
            </div>
          </div>
        </section>

        <section className="vision">
          <div className="wrap vision-inner">
            <p className="eyebrow">2047 Vision</p>
            <p>
              Behind everything we build: founders solving real-world problems for a Viksit Bharat
              - water to fintech, deep tech to mobility, metros to Bharat&apos;s smallest towns.
            </p>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="wrap cta-inner">
            <div>
              <h2>Build with Viksit Ventures</h2>
              <p className="audiences">
                {audiences.map((name, index) => (
                  <span key={name}>
                    {index > 0 ? <span className="dot"> · </span> : null}
                    {name}
                  </span>
                ))}
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn" href={site.emailHref}>
                Get in touch - {site.email}
              </a>
              <p className="contact-line">
                Contact · <a href={site.phoneHref}>{site.phone}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            {site.company} · {site.domain}
          </p>
        </div>
      </footer>
    </>
  );
}
