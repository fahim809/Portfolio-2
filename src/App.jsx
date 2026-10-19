import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Asterisk, Menu, X, Instagram, Mail, MoveUpRight } from 'lucide-react';

const projects = [
  {
    id: '01', category: 'BRAND IDENTITY', title: 'Form & Field',
    description: 'A grounded identity for a new generation of everyday objects.',
    year: '2026', tone: 'sage', type: 'form',
    art: <div className="form-art"><span className="form-sun" /><span className="form-arch" /><span className="form-word">FORM<br/><i>& FIELD</i></span><span className="form-small">OBJECTS FOR LIVING</span></div>
  },
  {
    id: '02', category: 'DIGITAL CAMPAIGN', title: 'After Hours',
    description: 'Electric visuals for nights that never quite end.',
    year: '2026', tone: 'purple', type: 'after',
    art: <div className="after-art"><span className="after-orb" /><span className="after-line" /><span className="after-title">AFTER<br/><em>HOURS</em></span><span className="after-coords">22° 34′ 12″ N<br/>88° 22′ 10″ E</span></div>
  },
  {
    id: '03', category: 'PACKAGING DESIGN', title: 'Good Ritual',
    description: 'A little daily ritual, wrapped in a quieter kind of confidence.',
    year: '2025', tone: 'orange', type: 'ritual',
    art: <div className="ritual-art"><div className="ritual-pack"><span>good<br/><b>ritual.</b></span><small>DAILY BLEND · 01</small></div><div className="ritual-pack pack-back"><span>MAKE<br/>TIME.</span></div><span className="ritual-star">✳</span></div>
  },
  {
    id: '04', category: 'MOTION / EXPERIMENT', title: 'Soft Geometry',
    description: 'An ongoing study of shape, light, and movement.',
    year: '2025', tone: 'blue', type: 'geometry',
    art: <div className="geo-art"><div className="geo-shape shape-one" /><div className="geo-shape shape-two" /><div className="geo-shape shape-three" /><span>STUDY Nº 004</span></div>
  }
];

function ProjectCard({ project, index }) {
  return <article className="project-card reveal" style={{ '--delay': index * 100 + 'ms' }}>
    <div className={'project-art ' + project.tone}>{project.art}<span className="art-index">{project.id} / 04</span><span className="art-open"><ArrowUpRight size={20}/></span></div>
    <div className="project-info"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-year">{project.year}</span></div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    update(); const timer = setInterval(update, 60000);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { clearInterval(timer); observer.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <main>
    <nav className="nav shell">
      <a className="wordmark" href="#home" onClick={closeMenu}>fahim<span>®</span></a>
      <div className={'nav-links ' + (menuOpen ? 'nav-open' : '')}>
        <a href="#work" onClick={closeMenu}>Selected work <span>04</span></a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={13}/></a>
      </div>
      <div className="nav-status"><span className="status-dot" /> AVAILABLE FOR PROJECTS</div>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </nav>

    <section className="hero shell" id="home">
      <div className="hero-meta"><span>INDEPENDENT DESIGNER</span><span>BASED IN BANGLADESH · {time || '—:—'} BST</span></div>
      <div className="hero-title-wrap"><h1>Making<br/>ideas <span className="italic-word">matter.</span></h1><Asterisk className="hero-spark" strokeWidth={1.1}/></div>
      <div className="hero-bottom"><p className="hero-intro">I’m Fahim — a graphic designer building distinctive identities and digital experiences with clarity, character, and a little curiosity.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={24}/></a><span className="hero-side-note">DESIGN WITH<br/>INTENTION ↘</span></div>
      <div className="hero-marquee"><div className="marquee-track">{Array.from({length:4},(_,i)=><span key={i}>GOOD DESIGN HAS A POINT OF VIEW <Asterisk size={16}/></span>)}</div></div>
    </section>

    <section className="work-section shell" id="work">
      <div className="section-head reveal"><div><span className="eyebrow">01 — THE PORTFOLIO</span><h2>A few things<br/>I’ve <span className="serif-italic">made.</span></h2></div><p>A collection of visual explorations, identity systems, and ideas brought to life. Each one starts with a question.</p></div>
      <div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i}/>)}</div>
      <div className="work-foot"><span>INDEPENDENT PRACTICE · 2025—2026</span><span>MORE GOOD THINGS IN PROGRESS <Asterisk size={13}/></span></div>
    </section>

    <section className="about-section" id="about"><div className="shell about-grid">
      <div className="about-label reveal"><span className="eyebrow">02 — A LITTLE ABOUT ME</span><div className="about-stamp"><Asterisk size={35}/><span>CURIOUS<br/>BY NATURE</span></div></div>
      <div className="about-copy reveal"><h2>Thoughtful work.<br/><span className="serif-italic">No unnecessary noise.</span></h2><p>I’m an independent designer interested in how good ideas become clear, memorable visuals. From brand identities to social campaigns and motion experiments, I like finding the detail that makes a design feel unmistakably itself.</p><p>Currently sharpening my craft, exploring new tools, and looking to collaborate with people who care about what they put into the world.</p><a href="#contact" className="text-link">HAVE SOMETHING IN MIND? <ArrowUpRight size={16}/></a></div>
      <div className="about-bottom"><span>WHAT I DO</span><div className="skill-list"><span>Brand identity</span><span>Art direction</span><span>Social design</span><span>Motion experiments</span><span>Digital visuals</span></div></div>
    </div></section>

    <section className="contact-section shell" id="contact"><div className="contact-top reveal"><span className="eyebrow">03 — YOUR TURN</span><span className="contact-note">GOOD THINGS START WITH A HELLO.</span></div><h2 className="contact-title reveal">Have a good<br/>one in <span className="serif-italic">mind?</span></h2><a className="contact-cta reveal" href="mailto:pixelmaverick.ai@gmail.com"><span>LET’S MAKE IT REAL</span><MoveUpRight size={24}/></a><div className="contact-bottom"><p>Have a project, a question, or just want to say hi? My inbox is open.</p><div className="social-links"><a href="mailto:pixelmaverick.ai@gmail.com"><Mail size={15}/> EMAIL</a><a href="https://www.instagram.com/pixel.maverick/" target="_blank" rel="noreferrer"><Instagram size={15}/> INSTAGRAM <ArrowUpRight size={12}/></a></div></div></section>

    <footer className="footer shell"><a className="wordmark" href="#home">fahim<span>®</span></a><span>DESIGNED WITH INTENTION © 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </main>;
}