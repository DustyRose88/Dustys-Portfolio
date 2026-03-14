export default function App() {
  const projects = [
    {
      title: "Web Development Cookbook",
      desc: "Interactive web development examples with live demos and code toggles.",
      stack: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Social Dashboard",
      desc: "Responsive social dashboard with profiles, posts, and engagement controls.",
      stack: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "REST API Project",
      desc: "Node and Express API with authentication, routes, and logging.",
      stack: ["Node", "Express", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* NAVBAR WITH LOGO */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-black">
            DR
          </div>
          <div>
            <p className="font-semibold">Dusty Rose</p>
            <p className="text-xs text-slate-400">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-emerald-400 mb-3 text-sm">Available for Opportunities</p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            I build modern
            <br />
            web experiences.
          </h2>

          <p className="text-slate-400 mb-8 leading-relaxed">
            I'm Dusty, a full stack developer focused on building responsive
            interfaces and scalable backend systems using modern JavaScript
            technologies.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
              View Projects
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-xl">
              Contact
            </button>
          </div>

          <div className="flex gap-3 mt-8 flex-wrap text-sm">
            {['JavaScript','React','Node.js','TypeScript','MySQL'].map(t => (
              <span key={t} className="bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">{t}</span>
            ))}
          </div>
        </div>

        {/* FEATURE PANEL */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Featured Projects</h3>

          <div className="space-y-4">
            {projects.map((p,i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-emerald-400 transition">
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-8 pb-24">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-[1.02] transition">

              <h4 className="text-xl font-semibold mb-3">
                {project.title}
              </h4>

              <p className="text-slate-400 mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech,i)=> (
                  <span key={i} className="text-xs bg-slate-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Live Demo
                </button>

                <button className="border border-slate-600 px-4 py-2 rounded">
                  GitHub
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-8 pb-24">
        <h3 className="text-3xl font-bold mb-10">Tech Stack</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['HTML','CSS','JavaScript','React','Node','Express','MySQL','Git'].map(s => (
            <div key={s} className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 pb-32">
        <div className="max-w-4xl mx-auto text-center bg-slate-900 border border-slate-800 rounded-2xl p-12">

          <h3 className="text-3xl font-bold mb-4">
            Let's Work Together
          </h3>

          <p className="text-slate-400 mb-8">
            I'm currently looking for opportunities where I can grow as a
            developer and build meaningful web applications.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl">
              Email Me
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-xl">
              LinkedIn
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-xl">
              GitHub
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}