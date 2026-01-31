"use client";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Database,
  Code2,
  Terminal,
  Cpu,
  Zap,
  Github,
  ChevronRight,
  Mail,
  Linkedin,
  Send,
  ExternalLink,
  Layers,
  ShieldCheck,
  Download,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  // Data Project Tetap Seperti Semula
  const projectData = [
    {
      title: "SIMSertif",
      category: "Management System",
      desc: "Sistem web manajemen sertifikasi LSP EI untuk pengelolaan data peserta, administrasi sertifikasi, hingga penerbitan sertifikat digital secara profesional dan sistematis.",
      tech: ["Laravel", "MySQL", "Next.js", "Tailwind CSS"],
      image: "/projects/simsertif-hero.png",
      link: "https://be-simsertif.karyakreasi.id/",
      type: "Live Demo",
    },
    {
      title: "Penanggungan Summit Explore",
      category: "Exploration Platform",
      desc: "Platform komprehensif bagi pendaki pemula yang menyediakan informasi jalur, estimasi waktu, serta edukasi persiapan fisik dan perlengkapan secara interaktif.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      image: "/projects/penanggungan-hero.png",
      link: "https://github.com/aditama12/penanggugan-summit-explore-1",
      type: "Source Code",
    },
    {
      title: "EventCert",
      category: "Backend Architecture Case Study",
      desc: "Automasi penerbitan sertifikat massal yang menangani ratusan data secara konkuren. Mengoptimalkan alur kerja administrasi dengan sistem batch generation yang aman dan efisien.",
      tech: ["Laravel API", "React JS", "PostgreSQL"],
      image: "/projects/eventcert-hero.png",
      link: "#contact",
      type: "Case Study",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-cyan-500/30 overflow-x-hidden relative">
      <div id="home" className="absolute top-0" />

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full opacity-40"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 min-h-screen flex items-center pt-24 text-left">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open for Collaboration
            </div>

            <p className="text-cyan-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase">
              Hi, I am
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-10">
              Muhammad <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Aditya Pratama
              </span>
            </h1>

            <div className="max-w-md space-y-8 mb-12 text-left">
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Informatics Undergraduate at{" "}
                <span className="text-white font-medium">
                  Universitas Negeri Surabaya
                </span>
                . Spesialis dalam membangun{" "}
                <span className="text-white">ekosistem digital</span> yang
                cerdas, aman, dan skalabel.
              </p>

              <div className="relative p-6 bg-white/2 border-l-4 border-cyan-500/40 rounded-r-2xl backdrop-blur-sm shadow-2xl shadow-cyan-500/5">
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  &quot;I merge technical logic with creative design to build
                  ecosystems that not only work but deliver exceptional
                  results.&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <a
                href="/cv.pdf"
                target="_blank"
                className="px-10 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center gap-2 no-underline"
              >
                Download CV <Download size={16} />
              </a>
              <a
                href="https://github.com/aditama12"
                target="_blank"
                className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 no-underline text-white"
              >
                Github{" "}
                <Github
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative group w-95">
              <div className="absolute -inset-1 bg-linear-to-tr from-cyan-500/30 to-blue-500/30 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-[#0d0d0d]/90 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl overflow-hidden">
                <div className="flex flex-col items-center mb-12 text-center">
                  <div className="relative w-32 h-32 mb-8 group-hover:rotate-3 transition-transform duration-500">
                    <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-blue-600 rounded-full blur-md opacity-50 animate-pulse"></div>
                    <div className="relative w-full h-full bg-[#151515] rounded-full border-2 border-white/10 flex items-center justify-center text-4xl shadow-inner">
                      👨‍💻
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      Available to Hire
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="w-full py-5 bg-cyan-500 text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all mb-10 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-center no-underline"
                >
                  Contact Me <Send size={14} />
                </a>
                <div className="text-center border-t border-white/5 pt-8">
                  <h4 className="text-2xl font-bold mb-2 uppercase tracking-tight text-white">
                    Aditama
                  </h4>
                  <p className="text-slate-500 text-xs font-mono tracking-[0.3em] uppercase mb-1">
                    Fullstack Developer
                  </p>
                  <p className="text-slate-500 text-[10px] font-mono italic">
                    Sidoarjo, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILL SECTION */}
      <section id="skill" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xs font-bold tracking-[0.5em] text-cyan-500 uppercase mb-4">
              Expertise
            </h2>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white">
              Technical <span className="text-slate-500">Stack</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                name: "Next JS",
                desc: "React Framework",
                icon: <Globe className="text-white" />,
                color: "bg-zinc-800",
              },
              {
                name: "React JS",
                desc: "Frontend Library",
                icon: <Layout className="text-cyan-400" />,
                color: "bg-cyan-950/30",
              },
              {
                name: "Laravel",
                desc: "PHP Framework",
                icon: <Layers className="text-red-500" />,
                color: "bg-red-950/20",
              },
              {
                name: "Tailwind CSS",
                desc: "CSS Framework",
                icon: <Code2 className="text-cyan-300" />,
                color: "bg-cyan-900/20",
              },
              {
                name: "MySQL",
                desc: "Database",
                icon: <Database className="text-blue-400" />,
                color: "bg-blue-950/20",
              },
              {
                name: "TypeScript",
                desc: "Language",
                icon: <ShieldCheck className="text-blue-500" />,
                color: "bg-blue-900/20",
              },
              {
                name: "Github",
                desc: "Version Control",
                icon: <Github className="text-white" />,
                color: "bg-zinc-800",
              },
              {
                name: "Vite",
                desc: "Build Tool",
                icon: <Zap className="text-yellow-500" />,
                color: "bg-amber-950/20",
              },
              {
                name: "Javascript",
                desc: "Language",
                icon: <Terminal className="text-yellow-400" />,
                color: "bg-yellow-950/20",
              },
              {
                name: "Node JS",
                desc: "Runtime Env",
                icon: <Cpu className="text-green-500" />,
                color: "bg-green-950/20",
              },
              {
                name: "PostgreSQL",
                desc: "Database",
                icon: <Database className="text-indigo-400" />,
                color: "bg-indigo-950/20",
              },
              {
                name: "Figma",
                desc: "Design Tool",
                icon: <Zap className="text-purple-400" />,
                color: "bg-purple-950/20",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-white/3 border border-white/10 rounded-4xl flex items-center gap-5 transition-all hover:bg-white/6 hover:border-cyan-500/30"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${skill.color} flex items-center justify-center`}
                >
                  {skill.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-[15px] font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-32 relative z-10 bg-linear-to-b from-transparent via-white/1 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-20 text-white">
            Featured <span className="text-slate-500">Works</span>
          </h3>
          <div className="space-y-32">
            {projectData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center group`}
              >
                <div className="w-full lg:w-3/5 aspect-video bg-[#0d0d0d] border border-white/10 rounded-4xl flex items-center justify-center relative overflow-hidden shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  {project.image.startsWith("/") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="text-8xl opacity-10 font-black text-white group-hover:scale-110 transition-transform duration-700">
                      {project.image}
                    </div>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all translate-y-12 group-hover:translate-y-0 shadow-lg z-20"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 text-left">
                  <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                    {project.category}
                  </span>
                  <h4 className="text-4xl font-bold uppercase text-white">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 font-light">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-cyan-500/50 pb-2 hover:text-cyan-400 hover:border-cyan-400 transition-all no-underline text-white"
                    >
                      {project.type} <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-40 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-cyan-500 font-bold tracking-[0.5em] text-xs mb-6 uppercase">
                Let&apos;s Talk
              </h2>
              <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 text-white">
                GET IN <span className="text-slate-500">TOUCH</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 max-w-md">
                Saya selalu terbuka untuk kolaborasi proyek menarik atau sekadar
                berdiskusi tentang ekosistem teknologi.
              </p>
              <a
                href="mailto:m.adiitaama@gmail.com"
                className="flex items-center gap-4 group no-underline text-white"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    Email Me
                  </p>
                  <p className="text-sm font-medium">m.adiitaama@gmail.com</p>
                </div>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  name: "LinkedIn",
                  icon: <Linkedin />,
                  label: "Mas Adit",
                  link: "https://www.linkedin.com/in/mas-adit-99b68a29a/",
                  color: "hover:border-blue-500/50",
                },
                {
                  name: "GitHub",
                  icon: <Github />,
                  label: "aditama12",
                  link: "https://github.com/aditama12",
                  color: "hover:border-white/50",
                },
                {
                  name: "Instagram",
                  icon: <Instagram />,
                  label: "@adiitaama_",
                  link: "https://instagram.com/adiitaama_",
                  color: "hover:border-pink-500/50",
                },
                {
                  name: "Email",
                  icon: <Mail />,
                  label: "Send Mail",
                  link: "mailto:m.adiitaama@gmail.com",
                  color: "hover:border-cyan-500/50",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 bg-white/2 border border-white/5 rounded-4xl transition-all group ${social.color} hover:bg-white/5 no-underline`}
                >
                  <div className="text-slate-500 group-hover:text-white group-hover:scale-110 transition-all mb-4">
                    {social.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-[10px] text-slate-600 font-mono mt-1">
                    {social.label}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER - SIMPLIFIED */}
      <footer className="py-12 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} MUHAMMAD ADITYA PRATAMA. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
