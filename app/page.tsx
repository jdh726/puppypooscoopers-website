import Script from "next/script"

export default function Home() {
  return (<>
  <a className="skip-link" href="#main">Skip to content</a>
<header className="site-header">
    <div className="wrap nav-wrap">
      <a className="brand" href="#home" aria-label="Puppy Poo Scoopers home"><img src="/assets/official-logo.jpg" width="68" height="68" alt="Puppy Poo Scoopers LLC official logo" /><span>Puppy Poo<br />Scoopers <small>LLC</small></span></a>
      <a className="button button-small header-request" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request service</a>
      <button className="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="main-nav"><span>Menu</span><span className="menu-lines" aria-hidden="true"></span></button>
      <nav id="main-nav" className="main-nav" aria-label="Main navigation">
        <a href="#pricing">Pricing</a><a href="#how-it-works">How it works</a><a href="#meet-joshua">Meet me</a><a href="#service-areas">Service areas</a>
        <a className="button button-small" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request service <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>
  <main id="main">
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">LOCAL PET WASTE REMOVAL</p>
        <h1 id="hero-title">Less scooping.<br />More <em>tail wags.</em></h1>
        <p className="hero-description">Enjoy your yard. Leave the scooping to Joshua, your local Hemingford neighbor.</p>
        <div className="welcome-offer"><strong>Your first cleaning is FREE.</strong><p>Start weekly or biweekly service. Normally $39.</p></div>
        <div className="hero-actions"><a className="button" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request service <span aria-hidden="true">&#8599;</span></a><a className="text-link" href="#pricing">See the plans <span aria-hidden="true">&#8595;</span></a></div>
        <p className="availability"><span className="status-dot" aria-hidden="true"></span>Accepting inquiries in Alliance, Hemingford, Chadron, Hay Springs, Rushville &amp; Gordon.<br /><span>Limited openings in Hay Springs, Rushville &amp; Gordon. Route availability confirmed before scheduling.</span></p>
      </div>
      <aside className="owner-intro" aria-label="Meet your local scooper">
        <img className="hero-owner-photo" src="/assets/joshua-great-dane-meet-me.png" width="1086" height="1448" alt="Joshua with his Great Dane" fetchPriority="high" />
        <div><p className="eyebrow">THE PERSON BEHIND THE SCOOP</p><strong>Hi, I'm Joshua.</strong><p>Dog owner. Hemingford neighbor.<br />Here to make your yard one less chore.</p><a href="#meet-joshua" className="text-link">A little about me <span aria-hidden="true">&#8599;</span></a></div>
      </aside>
    </section>

    <section className="care-strip" aria-label="Our approach"><div className="wrap care-inner"><div><span className="check-icon" aria-hidden="true">&#10003;</span> No contracts</div><div><span className="check-icon" aria-hidden="true">&#10003;</span> Tools sanitized between yards</div><div><span className="check-icon" aria-hidden="true">&#10003;</span> Gate secured before leaving</div></div></section>

    <section id="pricing" className="section pricing-section" aria-labelledby="pricing-title"><div className="wrap">
      <div className="section-heading"><div><p className="eyebrow">FIND YOUR CLEANUP ROUTINE</p><h2 id="pricing-title">Simple plans. A cleaner yard.</h2></div></div>
      <p className="pricing-intro">Prices cover a standard city lot. Larger yard or more dogs? We'll confirm the details with you.</p>
      <div className="price-grid">
        <article className="price-card featured"><div className="plan-top"><h3>Weekly</h3><p className="price"><strong>$76</strong><span>/ month</span></p></div><ul className="plan-list"><li>4 visits each month</li><li>5th visit free when applicable</li><li>Up to 6 dogs</li></ul><a className="button" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request weekly service <span aria-hidden="true">&#8599;</span></a></article>
        <article className="price-card"><div className="plan-top"><h3>Every other week</h3><p className="price"><strong>$54</strong><span>/ month</span></p></div><ul className="plan-list"><li>2 visits each month</li><li>3rd visit free when applicable</li><li>Up to 4 dogs</li></ul><a className="button button-outline" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request biweekly service <span aria-hidden="true">&#8599;</span></a></article>
        <article className="price-card"><div className="plan-top"><h3>One-time cleanup</h3><p className="price"><strong>$89</strong><span>/ cleanup</span></p></div><ul className="plan-list"><li>One cleanup visit</li><li>Yard details confirmed first</li><li>No recurring plan required</li></ul><a className="button button-outline" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request a one-time clean <span aria-hidden="true">&#8599;</span></a></article>
      </div>
      <div className="pricing-notes"><p><strong>A free first cleaning to welcome you.</strong> Start weekly or biweekly service and the normally $39 initial cleaning is free. The $89 one-time cleanup is excluded.</p><p><strong>Optional deodorizer: +$23/month</strong> with recurring service. Your yard, route and availability are confirmed before scheduling.</p></div>
    </div></section>

    <section id="how-it-works" className="section how-section" aria-labelledby="how-title"><div className="wrap">
      <div className="section-heading"><div><p className="eyebrow">LET'S KEEP IT EASY</p><h2 id="how-title">You ask. We confirm. I scoop.</h2></div></div>
      <div className="steps"><article><span className="step-number">01</span><h3>Request your service.</h3><p>Tell me about your yard and preferred service in the Jobber request form.</p></article><article><span className="step-number">02</span><h3>Confirm the details.</h3><p>We'll check your route, yard and schedule.</p></article><article><span className="step-number">03</span><h3>Enjoy your yard.</h3><p>I take care of the cleanup on your agreed schedule.</p></article></div>
    </div></section>

    <section id="cleanup-photos" className="section cleanup-section" aria-labelledby="cleanup-title"><div className="wrap"><p className="eyebrow">CARE FOR THE YARD YOU LOVE</p><h2 id="cleanup-title">A look at local cleanup.</h2><p className="cleanup-gallery-note">Photos shared by Joshua. Select a photo for the full view.</p><div className="cleanup-gallery">
      <figure><button type="button" className="cleanup-photo-button" data-photo="/assets/1000005273.jpg" data-photo-alt="A fenced yard with natural grass, toys and cleanup tools near the gate" data-photo-caption="A fenced yard. Room for everyday outdoor time." aria-label="View the full fenced-yard photo" aria-haspopup="dialog"><img className="cleanup-yard-image" src="/assets/1000005273.jpg" width="1536" height="2048" alt="A fenced yard with natural grass and toys" loading="lazy" decoding="async" /><span className="photo-expand" aria-hidden="true">&#8599;</span></button><figcaption><strong>A fenced yard.</strong><span>Room for everyday outdoor time.</span></figcaption></figure>
      <figure><button type="button" className="cleanup-photo-button" data-photo="/assets/1000006682.jpg" data-photo-alt="Scooping tools beside a metal yard gate and leafy plants" data-photo-caption="The tools for the job. Scooping tools beside the gate." aria-label="View the full cleanup-tools photo" aria-haspopup="dialog"><img className="cleanup-tools-image" src="/assets/1000006682.jpg" width="1440" height="1920" alt="Scooping tools beside a yard gate" loading="lazy" decoding="async" /><span className="photo-expand" aria-hidden="true">&#8599;</span></button><figcaption><strong>The tools for the job.</strong><span>Scooping tools beside the gate.</span></figcaption></figure>
    </div></div></section>

    <section id="meet-joshua" className="section meet-section" aria-labelledby="meet-title"><div className="wrap meet-grid">
      <figure className="owner-photo"><img className="owner-portrait" src="/assets/joshua-great-dane-meet-me.png" width="1086" height="1448" alt="Joshua, owner of Puppy Poo Scoopers LLC, with his Great Dane" loading="lazy" decoding="async" /></figure>
      <div className="meet-copy"><p className="eyebrow">MEET YOUR LOCAL SCOOPER</p><h2 id="meet-title">A neighbor who cares.</h2><p className="lead">I'm Joshua. Dog owner.<br />Hemingford, Nebraska.</p></div>
      <div className="meet-story"><p>I started Puppy Poo Scoopers because I know what it's like to love your dogs and still have a yard that needs attention. I take my time with each yard and take pride in serving the community I call home.</p><div className="owner-signoff"><span>Joshua</span><p>Owner, Puppy Poo Scoopers LLC</p></div><a className="text-link link-button" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Let's talk about your yard <span aria-hidden="true">&#8599;</span></a></div>
    </div></section>

    <section id="service-areas" className="section area-section" aria-labelledby="area-title"><div className="wrap area-grid"><div><p className="eyebrow">RIGHT HERE IN THE PANHANDLE</p><h2 id="area-title">Is your yard on the route?</h2><p className="section-intro">Based in Hemingford. Tell me your city and we'll check availability.</p><a className="button" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Check my area <span aria-hidden="true">&#8599;</span></a></div><div className="area-list"><div><span className="area-status">Accepting inquiries</span><h3>Alliance &middot; Hemingford &middot; Chadron</h3><p>Growing our Chadron route. Let's see if your yard is a fit.</p></div><div><span className="area-status limited">Limited availability</span><h3>Hay Springs &middot; Rushville &middot; Gordon</h3></div><p className="micro">Route availability is confirmed before scheduling. An inquiry does not reserve or guarantee a service slot.</p></div></div></section>

    <section id="faq" className="section faq-section" aria-labelledby="faq-title"><div className="wrap faq-grid"><div><p className="eyebrow">A FEW GOOD QUESTIONS</p><h2 id="faq-title">Before we scoop.</h2></div><div className="faq-list">
      <details><summary>How does the free first cleaning work?</summary><p>Start weekly or biweekly service and your first cleaning is free. The normally $39 initial cleaning charge is waived. This offer does not apply to the $89 one-time cleanup.</p></details>
      <details><summary>What if my yard is larger or I have more dogs?</summary><p>The listed prices cover a standard city lot, with up to six dogs for weekly service or four for biweekly. Share your yard details and Joshua will confirm the price before scheduling.</p></details>
      <details><summary>Do I need a contract?</summary><p>No contracts. Confirm the service details and frequency that work for you with Joshua.</p></details>
      <details><summary>Does a request mean I'm booked?</summary><p>A request starts the conversation. Joshua confirms your route, yard and schedule with you before service is booked.</p></details>
    </div></div></section>

    <section className="closing-section"><div className="wrap closing-inner"><div><h2>Ready for a cleaner yard?</h2><p>Let's find the right routine for your home.</p></div><a className="button button-cream" href="https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new" target="_blank" rel="noopener noreferrer">Request service <span aria-hidden="true">&#8599;</span></a></div></section>
  </main>
  <footer className="site-footer"><div className="wrap"><div className="footer-main"><div><a className="footer-brand" href="#home">Puppy Poo Scoopers <small>LLC</small></a><p>Locally owned in Hemingford, Nebraska.<br />Pet waste removal for the Panhandle.</p></div><div><p className="footer-label">SAY HELLO</p><p className="contact-number"><a href="tel:3087608639">(308) 760-8639</a></p><p><a href="mailto:admin@puppypooscoopers.com">admin@puppypooscoopers.com</a></p></div><nav aria-label="Footer navigation"><a href="#pricing">Plans &amp; pricing</a><a href="#meet-joshua">Meet Joshua</a><a href="#service-areas">Service areas</a><a href="#faq">FAQs</a></nav></div><div className="footer-bottom"><span>© 2026 Puppy Poo Scoopers LLC</span><nav className="legal-links" aria-label="Business links"><a href="https://docs.google.com/document/d/1jKNPzaHgJ32N1M4eS9PVtwbwqJzWNMgvRdr7sbFdMD8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Privacy policy</a><a href="https://docs.google.com/document/d/1ONPsmW9KOjNudZcZddnt4vZ3NE5KbnKlxZ6sk1RTFE4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Terms of service</a><a href="https://www.facebook.com/profile.php?id=61583865665138" target="_blank" rel="noopener noreferrer">Facebook</a></nav></div></div></footer>

<dialog id="photo-dialog" aria-labelledby="photo-title" aria-describedby="photo-caption"><div className="photo-dialog-head"><h2 id="photo-title">Photos from Joshua</h2><button className="photo-close" type="button" aria-label="Close full photo">&#215;</button></div><img id="full-photo" alt="" /><p id="photo-caption"></p></dialog>

    <Script src="/site.js" strategy="afterInteractive" />
  </>)
}
