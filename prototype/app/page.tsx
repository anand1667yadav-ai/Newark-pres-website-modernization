'use client';

import { useState } from 'react';
import {
  ArrowRight, CalendarDays, ChevronDown, ChevronRight, Clock3, HeartHandshake,
  Mail, MapPin, Menu, PlayCircle, Users, X,
} from 'lucide-react';

type View = 'home' | 'visit' | 'ministries' | 'family' | 'events';
type NavKey = 'new' | 'worship' | 'connect' | 'serve' | 'events' | 'about';
const navigation: Record<NavKey, { label: string; intro: string; items: Array<{ label: string; action?: View; note?: string }> }> = {
  new: { label: 'I’m New', intro: 'Everything you need for a comfortable first Sunday.', items: [
    { label: 'Plan Your Visit', action: 'visit', note: 'Start here' }, { label: 'What to Expect', action: 'visit' }, { label: 'Children on Sundays', action: 'family' }, { label: 'Accessibility', action: 'visit' }, { label: 'Directions & Parking', action: 'visit' }, { label: 'Contact Us', action: 'visit' },
  ]},
  worship: { label: 'Worship', intro: 'Gather with us in person or online.', items: [
    { label: 'Sunday Worship', action: 'visit' }, { label: 'Watch Online' }, { label: 'Sermons' }, { label: 'Music', action: 'ministries' }, { label: 'Prayer' },
  ]},
  connect: { label: 'Connect', intro: 'Find people and a place to grow.', items: [
    { label: 'Children & Families', action: 'family', note: 'L2 example' }, { label: 'Youth' }, { label: 'Adults' }, { label: 'Small Groups' }, { label: 'Fellowship' }, { label: 'Pastoral Care' },
  ]},
  serve: { label: 'Serve', intro: 'Put faith into action in church and community.', items: [
    { label: 'Community Outreach' }, { label: 'Mission Partners' }, { label: 'Volunteer at Church' }, { label: 'Current Needs' },
  ]},
  events: { label: 'Events', intro: 'See what is happening in church life.', items: [
    { label: 'Upcoming Events', action: 'events' }, { label: 'Church Calendar', action: 'events' }, { label: 'Special Services', action: 'events' },
  ]},
  about: { label: 'About Us', intro: 'Learn about our faith, people, and story.', items: [
    { label: 'Our Story' }, { label: 'What We Believe' }, { label: 'Leadership' }, { label: 'Staff' }, { label: 'Governance' }, { label: 'News' },
  ]},
};
const ministries = [
  { title: 'Children & Families', text: 'A welcoming place for children to participate, learn, and grow in faith.', icon: Users },
  { title: 'Music', text: 'Share in worship through voices, instruments, bells, and joyful community.', icon: PlayCircle },
  { title: 'Community Care', text: 'Serve neighbors through practical care, fellowship, and local partnerships.', icon: HeartHandshake },
];

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav, setOpenNav] = useState<NavKey | null>(null);
  const go = (next: View) => {
    setView(next);
    setMenuOpen(false);
    setOpenNav(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const choose = (item: { label: string; action?: View }) => item.action ? go(item.action) : setOpenNav(null);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="concept-bar">Concept prototype — church details and photography to be confirmed</div>
      <header className="site-header">
        <button className="brand" onClick={() => go('home')} aria-label="Go to homepage">
          <span className="brand-mark" aria-hidden="true"><span>F</span><span>P</span></span>
          <span><strong>First Presbyterian</strong><small>Church of Newark</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(Object.keys(navigation) as NavKey[]).map((key) => (
            <button key={key} className={openNav === key ? 'active' : ''} onClick={() => setOpenNav(openNav === key ? null : key)} aria-expanded={openNav === key}>
              {navigation[key].label} <ChevronDown />
            </button>
          ))}
          <a className="nav-link" href="https://www.newarkpres.org/give/" target="_blank" rel="noreferrer">Give</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
          {menuOpen ? <X /> : <Menu />}<span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </header>
      {openNav && <MegaMenu navKey={openNav} choose={choose} close={() => setOpenNav(null)} />}
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {(Object.keys(navigation) as NavKey[]).map((key) => <div className="mobile-group" key={key}><strong>{navigation[key].label}</strong>{navigation[key].items.map((item) => <button key={item.label} onClick={() => choose(item)}>{item.label}</button>)}</div>)}
          <a href="https://www.newarkpres.org/give/" target="_blank" rel="noreferrer">Give</a>
        </nav>
      )}
      <main id="main-content">
        {view === 'home' && <HomeView go={go} />}
        {view === 'visit' && <VisitView go={go} />}
        {view === 'ministries' && <MinistriesView go={go} />}
        {view === 'family' && <FamilyView go={go} />}
        {view === 'events' && <EventsView go={go} />}
      </main>
      <footer>
        <div className="footer-main">
          <div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span>F</span><span>P</span></span><div><strong>First Presbyterian Church of Newark</strong><p>A welcoming community of faith in Newark, California.</p></div></div>
          <div><h2>Join us Sunday</h2><p>Worship at 9:30 a.m.</p><p>In person and online</p></div>
          <div><h2>Visit</h2><p>35450 Newark Blvd.</p><p>Newark, CA 94560</p></div>
          <div><h2>Connect</h2><p>(510) 371-8309</p><p>office@newarkpres.org</p></div>
        </div>
        <div className="footer-bottom"><span>Prototype for discussion</span><span>Accessibility · Privacy · Contact</span></div>
      </footer>
    </div>
  );
}

function MegaMenu({ navKey, choose, close }: { navKey: NavKey; choose: (item: { label: string; action?: View }) => void; close: () => void }) {
  const group = navigation[navKey];
  return <section className="mega-menu" aria-label={`${group.label} menu`}><div className="mega-intro"><span className="level-tag">L1</span><p className="eyebrow">{group.label}</p><h2>{group.intro}</h2><button onClick={close}>Close menu <X /></button></div><div className="mega-links"><p className="menu-level"><span className="level-tag">L2</span> Choose a topic</p>{group.items.map((item) => <button key={item.label} onClick={() => choose(item)}><span>{item.label}{item.note && <small>{item.note}</small>}</span><ChevronRight /></button>)}</div></section>;
}

function HomeView({ go }: { go: (view: View) => void }) {
  return <>
    <section className="hero">
      <div className="hero-image" role="img" aria-label="Warm sunlight through colorful glass, representing welcome and worship" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow light">You are welcome here</p>
        <h1>A place to belong.<br />A faith to explore.</h1>
        <p className="hero-copy">Whether church is familiar or completely new, there is a place for you at First Presbyterian Church of Newark.</p>
        <div className="button-row">
          <button className="button primary" onClick={() => go('visit')}>Plan your visit <ArrowRight /></button>
          <a className="button secondary" href="https://www.youtube.com/channel/UC9NxtyzVaehQJHwLlpwPWlw" target="_blank" rel="noreferrer"><PlayCircle /> Watch online</a>
        </div>
      </div>
      <div className="service-card" aria-label="Sunday service information">
        <div><Clock3 /><span><small>Sunday worship</small><strong>9:30 a.m.</strong></span></div>
        <div><MapPin /><span><small>In person</small><strong>35450 Newark Blvd.</strong></span></div>
        <button onClick={() => go('visit')} aria-label="View visit details"><ChevronRight /></button>
      </div>
    </section>
    <section className="welcome section-pad">
      <div><p className="eyebrow">Welcome to FPC Newark</p><h2>Come as you are.</h2></div>
      <div><p>We are a community learning to love God, build up others, and share our faith. You do not need to have everything figured out before you walk through the door.</p><button className="text-link" onClick={() => go('visit')}>What to expect on Sunday <ArrowRight /></button></div>
    </section>
    <section className="pathways section-pad">
      <article className="path-card featured"><span>01</span><h3>New here?</h3><p>Find the service time, location, family information, accessibility details, and what Sunday feels like.</p><button onClick={() => go('visit')}>Plan your visit <ArrowRight /></button></article>
      <article className="path-card"><span>02</span><h3>Find community</h3><p>Explore ways for children, adults, musicians, and neighbors to connect and serve.</p><button onClick={() => go('ministries')}>Explore ministries <ArrowRight /></button></article>
      <article className="path-card"><span>03</span><h3>Stay connected</h3><p>See what is coming up and find the calendar used by our church community.</p><button onClick={() => go('events')}>View events <ArrowRight /></button></article>
    </section>
    <section className="gathering section-pad">
      <div className="gathering-photo" role="img" aria-label="Abstract stained glass banner from the current church website" />
      <div><p className="eyebrow">Worship together</p><h2>In the room or online, you are part of the community.</h2><p>Join us Sunday at 9:30 a.m. for music, prayer, Scripture, and a message rooted in everyday life.</p><a className="button dark" href="https://www.youtube.com/channel/UC9NxtyzVaehQJHwLlpwPWlw" target="_blank" rel="noreferrer"><PlayCircle /> Watch the latest service</a></div>
    </section>
    <section className="visit-cta section-pad"><p className="eyebrow light">Your first Sunday</p><h2>We will save you a seat.</h2><p>See what to expect, how to get here, and who to contact before you come.</p><button className="button cream" onClick={() => go('visit')}>Plan your visit <ArrowRight /></button></section>
  </>;
}

function VisitView({ go }: { go: (view: View) => void }) {
  return <>
    <PageIntro eyebrow="Plan your visit" title="Your first Sunday, made simple." text="Here is what we can confirm today. Additional arrival and family details will be added only after church leaders approve them." />
    <section className="visit-grid section-pad">
      <InfoCard icon={Clock3} label="When" title="Sunday at 9:30 a.m." text="A one-hour service with music, prayer, Scripture, and a message." />
      <InfoCard icon={MapPin} label="Where" title="35450 Newark Blvd." text="Newark, California 94560. Use the directions link to plan your route." />
      <InfoCard icon={Users} label="Families" title="Children are welcome" text="Children may sit with their family or participate in the children’s area during worship." />
      <InfoCard icon={HeartHandshake} label="Accessibility" title="A more welcoming sanctuary" text="The current site states that a hearing-loop system is available. Please contact the church with specific needs." />
    </section>
    <section className="expect section-pad"><div><p className="eyebrow">What to expect</p><h2>A warm welcome and room to breathe.</h2></div><ol><li><strong>Arrive</strong><span>Come as you are. Final parking and entrance guidance will be confirmed by church leaders.</span></li><li><strong>Worship</strong><span>Expect a blend of traditional hymns and contemporary praise in a one-hour service.</span></li><li><strong>Connect</strong><span>Stay for conversation after worship, or simply take your time and head home.</span></li></ol></section>
    <section className="contact-strip"><div><Mail /><span><small>Questions before Sunday?</small><strong>office@newarkpres.org · (510) 371-8309</strong></span></div><button className="button cream" onClick={() => go('home')}>Back to home</button></section>
  </>;
}

function MinistriesView({ go }: { go: (view: View) => void }) {
  return <><PageIntro eyebrow="Find your people" title="Faith grows in community." text="A simple overview helps visitors understand where they might connect without requiring church vocabulary." /><section className="ministry-list section-pad">{ministries.map(({ title, text, icon: Icon }) => <article key={title}><Icon /><div><h2>{title}</h2><p>{text}</p></div><ChevronRight /></article>)}</section><section className="visit-cta section-pad"><p className="eyebrow light">Not sure where to begin?</p><h2>Start with a Sunday.</h2><p>Come meet the community and ask questions at your own pace.</p><button className="button cream" onClick={() => go('visit')}>Plan your visit <ArrowRight /></button></section></>;
}

function FamilyView({ go }: { go: (view: View) => void }) {
  const topics = [['Sunday Experience', 'What children and parents can expect during worship.'], ['Age Groups', 'A simple view of opportunities by age and stage.'], ['Family Events', 'Upcoming ways for families to connect.'], ['Safety & Registration', 'Clear policies and registration information.']];
  return <><section className="hierarchy-demo section-pad"><p><span className="level-tag">L1</span> Connect <ChevronRight /> <span className="level-tag">L2</span> Children &amp; Families</p><small>Prototype annotation: the finished website would show a normal breadcrumb without the L1/L2 labels.</small></section><PageIntro eyebrow="Children & families" title="A place for every generation." text="This representative landing page shows how an L2 topic introduces the ministry and guides families to more specific L3 information." /><section className="l3-section section-pad"><div className="l3-heading"><span className="level-tag">L3</span><div><p className="eyebrow">Explore this ministry</p><h2>Choose the detail you need.</h2></div></div><div className="l3-grid">{topics.map(([title, text]) => <button key={title}><span><strong>{title}</strong><small>{text}</small></span><ChevronRight /></button>)}</div></section><section className="contact-strip"><div><HeartHandshake /><span><small>Ready to meet us?</small><strong>Families are welcome at Sunday worship.</strong></span></div><button className="button cream" onClick={() => go('visit')}>Plan your visit</button></section></>;
}

function EventsView({ go }: { go: (view: View) => void }) {
  return <><PageIntro eyebrow="What’s happening" title="Gather, learn, and serve together." text="This prototype shows how current events can be presented clearly while the existing calendar remains the source of truth." /><section className="events section-pad"><article><p className="date"><strong>Every</strong><span>Sunday</span></p><div><p className="eyebrow">Worship</p><h2>Sunday service</h2><p>9:30 a.m. · In person and online</p></div><PlayCircle /></article><article><p className="date"><strong>Full</strong><span>Calendar</span></p><div><p className="eyebrow">Church life</p><h2>See all upcoming events</h2><p>Open the church’s existing calendar for current dates and details.</p></div><a href="https://www.newarkpres.org/calendar1/" target="_blank" rel="noreferrer" aria-label="Open current church calendar"><CalendarDays /></a></article></section><section className="contact-strip"><div><CalendarDays /><span><small>Something missing?</small><strong>Time-sensitive events stay connected to the existing church calendar.</strong></span></div><button className="button cream" onClick={() => go('home')}>Back to home</button></section></>;
}

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro section-pad"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
function InfoCard({ icon: Icon, label, title, text }: { icon: typeof Clock3; label: string; title: string; text: string }) {
  return <article className="info-card"><Icon /><p className="eyebrow">{label}</p><h2>{title}</h2><p>{text}</p></article>;
}
