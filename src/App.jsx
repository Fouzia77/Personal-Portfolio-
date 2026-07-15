import { useState } from "react"
import { motion } from "framer-motion"
import { ParallaxBanner } from "react-scroll-parallax"
import {
  FaCss3Alt,
  FaEnvelope,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiJavascript, SiNextdotjs, SiVite } from "react-icons/si"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Vite", icon: SiVite },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Sass", icon: FaSass },
  { name: "Figma", icon: FaFigma },
]

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A responsive metrics dashboard with role-based routes, reusable charts, and summary cards for fast monitoring.",
    tech: ["React", "Tailwind CSS", "Chart.js", "Firebase"],
    github: "https://github.com/Fouzia77/Personal-Portfolio-",
    demo: "https://personalportfolio-ten-ashen.vercel.app",
  },
  {
    title: "Live Sports Score Ticker ",
    description:
      "A highly functional and well-structured Kafka implementation demonstrating strong core concepts of message keying, topic partitioning, and consumer group scaling, with minor gaps in Docker orchestration and live lag monitoring.",
    tech: ["React", "Vite", "Node js", "PostgreSQL"],
    github: "https://github.com/Fouzia77/Live-Sports-Score-Ticker.git",
    demo: "https://www.loom.com/share/9d0369ddb3a2425b85c2f05d527116d6"
  },
  {
    title: "Twitter Sentiment Analysis API ",
    description:
      "A complete sentiment analysis system using a pre-trained BERT model.",
    tech: ["React", "TypeScript", "FastAPI", "Pytorch"],
    github: "https://github.com/Fouzia77/Twitter-Sentiment-Analysis-API.git",
    demo: "https://www.loom.com/share/b9a15a995b194d548eac2f56c9c718e9",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-base text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="font-heading text-lg font-semibold tracking-wide text-white">
            Fouzia<span className="text-accent">.</span>
          </a>
          <button
            type="button"
            className="rounded-lg border border-white/20 px-3 py-2 text-sm md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {mobileMenuOpen ? (
          <ul className="space-y-3 border-t border-white/10 px-4 py-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-slate-300 transition hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <main className="overflow-hidden">
        <ParallaxBanner
          id="hero"
          layers={[
            { speed: -20, children: <div className="absolute inset-0 bg-hero-radial" /> },
            {
              speed: -10,
              children: <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.16),transparent_45%)]" />,
            },
          ]}
          className="relative"
        >
          <section className="mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="mb-4 inline-block rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                Full Stack Developer
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Mohammad Fouzia Firdous
              </h1>
              <p className="mt-4 max-w-2xl text-xl font-medium text-slate-200 sm:text-2xl">
                Building performant web experiences with purposeful motion.
              </p>
              <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
                I am a frontend developer focused on responsive interfaces, component systems, and
                delightful interactions that still prioritize accessibility and performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  View My Work
                </a>
                <a
                  href="https://github.com/Fouzia77"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent"
                >
                  GitHub Profile
                </a>
              </div>
            </motion.div>
          </section>
        </ParallaxBanner>

        <motion.section
          id="about"
          className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl border border-white/10 bg-panel p-8 shadow-glow">
            <h2 className="font-heading text-3xl font-semibold text-white">About Me</h2>
            <p className="mt-5 leading-7 text-slate-300">
              I&apos;m Mohammad Fouzia Firdous, a developer who enjoys transforming ideas into polished,
              production-ready interfaces. My background includes building reusable UI systems, interactive
              dashboards, and conversion-focused landing pages. I care deeply about responsive
              design, semantic HTML, and smooth interactions powered by transform and opacity
              animations. Currently, I am sharpening my skills in Next.js architecture and web
              performance optimization.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand/30 to-accent/20 p-8">
            <div className="flex h-full items-center justify-center rounded-xl border border-white/20 bg-base/70 p-10 text-center">
              <p className="text-slate-200">
                
                c:\Users\DELL\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\FA01EDF295980F907F5EA27A827D8392E9B4FF80\transfers\2026-29\WhatsApp Image 2026-07-15 at 10.50.59 AM.jpeg
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-heading text-3xl font-semibold text-white">Skills</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            A visual stack of technologies I use to design, build, and deploy performant web
            products.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.article
                  key={skill.name}
                  className="rounded-xl border border-white/10 bg-panel p-5 text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Icon className="mx-auto text-3xl text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-slate-200">{skill.name}</p>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-semibold text-white"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <h3 className="font-heading text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={`${project.title}-${item}`}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent transition hover:text-cyan-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent transition hover:text-cyan-300"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl border border-white/10 bg-panel p-8 shadow-glow sm:p-10">
            <h2 className="font-heading text-3xl font-semibold text-white">Let&apos;s Connect</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Open to freelance projects, internships, and full-time frontend roles. Reach out and
              let&apos;s build something meaningful.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:mdfouziafirdous07@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-accent"
              >
                <FaEnvelope aria-hidden="true" /> Email
              </a>
              <a
                href="https://github.com/Fouzia77"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-accent"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fouzia-firdous-mohammad-384072291"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-accent"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Mohammad Fouzia Firdous. Built with React, Vite, Tailwind, and
          Framer Motion.
        </p>
        {__GIT_SHA__ ? (
          <p className="mt-2 text-xs text-slate-600">Deploy {__GIT_SHA__}</p>
        ) : null}
      </footer>
    </div>
  )
}

export default App
