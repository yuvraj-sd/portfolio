import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "./data.js";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  Compass,
  Copy,
  Download,
  ExternalLink,
  Headphones,
  Loader2,
  Menu,
  Moon,
  Sun,
  Trophy,
  X
} from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#milestones", label: "Milestones" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const iconMap = { Activity, Award, Compass, Headphones, Medal: Award, Trophy };

const sectionMotion = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 }
  }
};

const itemMotion = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function RevealSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      variants={sectionMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className={`scroll-mt-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ children, align = "left" }) {
  return (
    <motion.div
      variants={itemMotion}
      className={`font-mono text-3xl font-black uppercase tracking-[0.2em] text-[var(--accent)] md:text-5xl md:tracking-[0.25em] ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}

function GitHubIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ArchitectureMarquee({ techs }) {
  const marqueeText = techs.join(" + ");

  return (
    <motion.div 
      variants={itemMotion} 
      className="relative left-1/2 w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[var(--line-soft)] bg-[var(--ribbon-bg)] py-4 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent" />
      
      <div 
        className="animate-marquee flex w-max font-mono text-sm font-bold uppercase tracking-[0.35em] text-[var(--accent)]"
        style={{ animationDuration: '40s' }}
      >
        <div className="flex gap-4 pr-4">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
        <div className="flex gap-4 pr-4" aria-hidden="true">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </motion.div>
  );
}

function AppBackground({ cursor, scrollProgress }) {
  const moodOpacity = 0.08 + scrollProgress * 0.26;
  const orbA = {
    x: 12 + scrollProgress * 22,
    y: 14 + scrollProgress * 10,
    opacity: 0.24 - scrollProgress * 0.04,
    color: `rgba(${45 - scrollProgress * 29}, ${212 - scrollProgress * 27}, ${191 - scrollProgress * 62}, ${0.18 + scrollProgress * 0.08})`
  };
  const orbB = {
    x: 82 - scrollProgress * 28,
    y: 26 + scrollProgress * 28,
    opacity: 0.18 + scrollProgress * 0.1,
    color: `rgba(${99 - scrollProgress * 43}, ${102 + scrollProgress * 87}, ${241 - scrollProgress * 14}, ${0.14 + scrollProgress * 0.08})`
  };
  const orbC = {
    x: 48 + Math.sin(scrollProgress * Math.PI) * 18,
    y: 88 - scrollProgress * 36,
    opacity: 0.14 + scrollProgress * 0.11,
    color: `rgba(${16 + scrollProgress * 8}, ${185 + scrollProgress * 26}, ${129 + scrollProgress * 72}, ${0.13 + scrollProgress * 0.08})`
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.07) 5rem, transparent 10.35rem)`,
          opacity: 0.82,
          transition: "background 120ms linear"
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            `radial-gradient(circle at ${orbA.x}% ${orbA.y}%, ${orbA.color}, transparent 24rem), radial-gradient(circle at ${orbB.x}% ${orbB.y}%, ${orbB.color}, transparent 26rem), radial-gradient(circle at ${orbC.x}% ${orbC.y}%, ${orbC.color}, transparent 28rem)`
        }}
      />
      <div className="ambient-orb ambient-orb-a" style={{ opacity: orbA.opacity, transform: `translate3d(${orbA.x - 18}vw, ${orbA.y - 20}vh, 0) scale(${1 + scrollProgress * 0.18})`, background: orbA.color }} />
      <div className="ambient-orb ambient-orb-b" style={{ opacity: orbB.opacity, transform: `translate3d(${orbB.x - 34}vw, ${orbB.y - 20}vh, 0) scale(${1.08 - scrollProgress * 0.12})`, background: orbB.color }} />
      <div className="ambient-orb ambient-orb-c" style={{ opacity: orbC.opacity, transform: `translate3d(${orbC.x - 24}vw, ${orbC.y - 24}vh, 0) scale(${0.92 + scrollProgress * 0.2})`, background: orbC.color }} />
      
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: moodOpacity,
          background:
            "linear-gradient(180deg, rgba(6, 8, 13, 0) 0%, rgba(6, 14, 20, 0.48) 38%, rgba(3, 6, 12, 0.92) 100%)"
        }}
      />
    </div>
  );
}

function ProjectGallery({ project, active, setActive }) {
  const images = project.images || [];
  const imageCount = images.length;
  const go = (direction) => {
    if (!imageCount) return;
    setActive((state) => ({
      ...state,
      [project.id]: (active + direction + imageCount) % imageCount
    }));
  };

  return (
    <motion.div variants={itemMotion} whileHover={{ scale: 1.018 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="group/gallery w-full md:max-w-[32rem]">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[var(--media-bg)] p-2 shadow-2xl shadow-black/10 transition-colors duration-300 group-hover/gallery:border-[var(--border-glow)]">
        <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden rounded-xl bg-black/20">
          {images.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              initial={false}
              animate={{ opacity: active === index ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 h-full w-full object-contain"
            />
          ))}

          {imageCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white opacity-0 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-black/70 group-hover/gallery:opacity-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white opacity-0 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-black/70 group-hover/gallery:opacity-100"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {imageCount > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive((state) => ({ ...state, [project.id]: index }))}
                className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-white" : "w-3 bg-white/45 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function App() {
  const { profile, projects, education, achievements, leisure } = portfolioData;
  const roles = profile.typingRoles || [];

  const [openSidebar, setOpenSidebar] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [activeImage, setActiveImage] = useState({});
  const [copied, setCopied] = useState(null);
  const [formState, setFormState] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const techs = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.architecture))).filter(Boolean), [projects]);
  const combinedMilestones = useMemo(() => [...achievements, ...leisure].filter((item) => item.title?.toLowerCase() !== "future-tech input logs"), [achievements, leisure]);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("dark") && !root.classList.contains("light")) {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!roles.length) return undefined;
    const currentRole = roles[typeIndex % roles.length];
    let timeout;
    if (!deleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 58);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 1350);
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length - 1)), 34);
    } else {
      setDeleting(false);
      setTypeIndex((index) => index + 1);
    }
    return () => clearTimeout(timeout);
  }, [deleting, displayText, roles, typeIndex]);

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    root.classList.toggle("light");
    setIsDark(root.classList.contains("dark"));
  }

  function copyStack(id, stack) {
    navigator.clipboard?.writeText(stack.join(", ")).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  // Live Web3Forms Integration Logic
  async function submitForm(event) {
    event.preventDefault();
    setFormState("transmitting");

    const ACCESS_KEY = "b02d71da-d5f2-47b4-adbd-92f7fe024f68";

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error submission fallback:", data);
        setFormState("error");
      }
    } catch (error) {
      console.error("Network communication failure:", error);
      setFormState("error");
    }
  }

  return (
    <motion.div
      className="relative min-h-screen overflow-x-hidden font-sans text-[var(--text-primary)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <AppBackground cursor={cursor} scrollProgress={scrollProgress} />
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-[var(--accent)]" style={{ transform: `scaleX(${scrollProgress})` }} />

      <header className="fixed inset-x-4 top-4 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--nav-bg)] px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <img src={profile.logoPath} alt="logo" className="h-10 w-10 rounded-full border border-[var(--border-glow)] object-cover" />
            <div className="min-w-0">
              <div className="truncate font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{profile.name}</div>
              <div className="text-xs text-[var(--text-secondary)]">Frontend / AI / Product</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--accent)]">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line-soft)] bg-[var(--bg-input)]">
              {isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-indigo-600" />}
            </button>
            <button type="button" onClick={() => setOpenSidebar(!openSidebar)} className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line-soft)] md:hidden">
              {openSidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-28 px-6 pt-36 pb-12">
        <RevealSection className="flex min-h-[70vh] flex-col items-center justify-center gap-10 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
            <img src={profile.logoPath} alt={profile.name} className="relative h-28 w-28 rounded-full border border-[var(--border-glow)] object-cover shadow-2xl md:h-36 md:w-36" />
          </div>
          <div className="flex max-w-5xl flex-col items-center gap-5">
            <h1 className="text-balance text-6xl font-black leading-[0.92] tracking-normal md:text-8xl lg:text-9xl">{profile.name}</h1>
            <div className="flex h-8 items-center justify-center gap-2 font-mono text-base font-bold uppercase tracking-[0.22em] text-[var(--accent)] md:text-lg">
              <span>{displayText}</span>
              <span className="h-5 w-0.5 animate-pulse bg-[var(--accent)]" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--line-soft)] bg-[var(--panel-bg)] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-primary)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--line-soft)] bg-[var(--panel-bg)] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-primary)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </RevealSection>
      </main>

      <ArchitectureMarquee techs={techs} />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 pt-16">
        <RevealSection id="about" className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-6">
            <SectionLabel align="center">About Me</SectionLabel>
            <p className="mx-auto max-w-2xl text-pretty text-center text-base font-medium leading-8 text-[var(--text-primary)] md:text-lg md:leading-9">{profile.aboutText}</p>
          </div>
        </RevealSection>

        <RevealSection id="education" className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-10">
            <SectionLabel>Education Archive</SectionLabel>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-2 w-px bg-[var(--accent)] md:left-6" />
              <div className="flex flex-col gap-12">
                {education.map((entry, index) => (
                  <article key={index} className="relative pl-16 md:pl-24">
                    <div className="absolute left-[2px] top-1 h-7 w-7 rounded-full border-4 border-[var(--bg-main)] bg-[var(--accent)] shadow-[0_0_0_8px_var(--node-halo)] md:left-[10px]" />
                    <div className="flex flex-col gap-3">
                      <div className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent)]">{entry.period || entry.dates}</div>
                      <h3 className="text-xl font-extrabold tracking-normal md:text-2xl">{entry.title}</h3>
                      <div className="flex flex-col gap-2 text-sm leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
                        {(entry.details || [entry.note]).filter(Boolean).map((d, i) => <p key={i}>{d}</p>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="milestones" className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col gap-8">
            <SectionLabel>STEM And Leisure</SectionLabel>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {combinedMilestones.map((item, index) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <article key={index} className="group min-h-64 rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-bg)] p-6 shadow-xl shadow-black/5 backdrop-blur transition-colors hover:border-[var(--border-glow)] md:p-7">
                    <div className="mb-8 flex items-center justify-between">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${index % 2 === 0 ? "bg-emerald-500/12 text-emerald-300" : "bg-cyan-500/12 text-cyan-300"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-extrabold tracking-normal md:text-2xl">{item.title}</h3>
                    <p className="text-sm leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="projects" className="flex flex-col gap-10">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex flex-col gap-14">
            {projects.map((project, index) => (
              <article key={project.id} className={`flex flex-col items-center gap-8 rounded-3xl border border-[var(--line-soft)] bg-[var(--project-bg)] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="flex flex-1 flex-col gap-5">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.architecture.map((tech) => (
                      <span key={tech} className="rounded-full border border-[var(--line-soft)] bg-[var(--chip-bg)] px-3 py-1.5 font-mono text-xs font-bold text-[var(--text-secondary)]">{tech}</span>
                    ))}
                    <button
                      type="button"
                      onClick={() => copyStack(project.id, project.architecture)}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line-soft)] text-[var(--text-secondary)] transition-all hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
                      aria-label={`Copy ${project.title} technology stack`}
                    >
                      {copied === project.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em]">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--line-soft)] px-4 py-2.5 text-[var(--text-primary)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--line-soft)] px-4 py-2.5 text-[var(--text-primary)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.links.download && (
                      <a
                        href={project.links.download}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--line-soft)] px-4 py-2.5 text-[var(--text-primary)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </a>
                    )}
                  </div>
                </div>
                <ProjectGallery project={project} active={activeImage[project.id] ?? 0} setActive={setActiveImage} />
              </article>
            ))}
          </div>
        </RevealSection>

        {/* Updated Active Contact Form Hooked into Web3Forms */}
        <RevealSection id="contact" className="mx-auto w-full max-w-2xl">
          <motion.div variants={itemMotion} className="rounded-3xl border border-[var(--line-soft)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8">
            <SectionLabel>Let's Talk</SectionLabel>

            {formState !== "success" && formState !== "error" ? (
              <form onSubmit={submitForm} className="mt-6 flex flex-col gap-4">
                <label className="flex flex-col gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Your Identity
                  <input
                    required
                    disabled={formState === "transmitting"}
                    value={form.name}
                    onChange={(event) => setForm((state) => ({ ...state, name: event.target.value }))}
                    placeholder="Enter name"
                    className="rounded-2xl border border-[var(--line-soft)] bg-[var(--bg-input)] px-4 py-3 font-sans text-base text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--placeholder)] focus:border-[var(--border-glow)]"
                  />
                </label>
                <label className="flex flex-col gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Return Address
                  <input
                    required
                    type="email"
                    disabled={formState === "transmitting"}
                    value={form.email}
                    onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))}
                    placeholder="name@domain.com"
                    className="rounded-2xl border border-[var(--line-soft)] bg-[var(--bg-input)] px-4 py-3 font-sans text-base text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--placeholder)] focus:border-[var(--border-glow)]"
                  />
                </label>
                <label className="flex flex-col gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Message Body
                  <textarea
                    required
                    rows={4}
                    disabled={formState === "transmitting"}
                    value={form.message}
                    onChange={(event) => setForm((state) => ({ ...state, message: event.target.value }))}
                    placeholder="Type your message..."
                    className="resize-none rounded-2xl border border-[var(--line-soft)] bg-[var(--bg-input)] px-4 py-3 font-sans text-base text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--placeholder)] focus:border-[var(--border-glow)]"
                  />
                </label>
                <button
                  type="submit"
                  disabled={formState === "transmitting"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-contrast)] transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  {formState === "transmitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {formState === "transmitting" ? "Transmitting" : "Send Message"}
                </button>
              </form>
            ) : formState === "success" ? (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-contrast)]">
                  <Check className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-black">Transmission Secure</h4>
                <p className="mt-2 text-[var(--text-secondary)]">Your message was sent safely. I'll get back to you at your return address soon!</p>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-red-500/20 text-red-400">
                  <X className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-black text-red-400">Transmission Interrupted</h4>
                <p className="mt-2 text-[var(--text-secondary)]">Something went wrong. Please check your network connection or try again later.</p>
                <button type="button" onClick={() => setFormState("idle")} className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--accent)] underline">Try Again</button>
              </motion.div>
            )}
          </motion.div>
        </RevealSection>
      </main>

      <footer className="relative z-10 border-t border-[var(--line-soft)] bg-black/5 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] md:flex-row">
          <div>2026 Yuvraj Singh Dhanjal. Hosted on Vercel.</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]">
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
