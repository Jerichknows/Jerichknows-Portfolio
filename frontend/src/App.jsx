import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Moon,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  name: "Jericho Radam",
  role: "Full-Stack Developer",
  location: "Philippines",
  email: "jerichradam@gmail.com",
  github: "https://github.com/Jerichknows?tab=repositories",
};

const services = [
  {
    icon: MonitorSmartphone,
    title: "Responsive UI Development",
    body: "Modern pages and dashboards shaped for mobile, tablet, and desktop screens.",
    points: ["React interfaces", "Mobile-first layouts"],
  },
  {
    icon: Code2,
    title: "Component Systems",
    body: "Reusable frontend pieces that keep pages consistent and easier to extend.",
    points: ["Tailwind styling", "Clean interaction states"],
  },
  {
    icon: ServerCog,
    title: "Backend Integration",
    body: "Full-stack experiences connected to APIs, databases, and deployment-ready services.",
    points: ["Django / Flask", "REST / GraphQL"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Delivery",
    body: "Performance-minded, accessible, and maintainable builds for real product use.",
    points: ["Testing flow", "AWS-ready deploys"],
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind", "Bootstrap", "Redux"],
  },
  {
    title: "Backend & API",
    items: ["Django", "Flask", "Laravel", "REST", "GraphQL", "Riverpod"],
  },
  {
    title: "Cloud, Data & Product",
    items: ["AWS", "AWS Lambda", "Supabase", "SQL", "SaaS"],
  },
];

const projects = [
  {
    name: "Business Management Systems",
    type: "POS / Inventory / Reports",
    visual: "pos",
    body: "Operational tools for sales tracking, stock control, daily reports, and admin workflows.",
  },
  {
    name: "Service Booking Platforms",
    type: "Appointments / Customers / Admin",
    visual: "booking",
    body: "Clean scheduling experiences for service-based businesses, teams, and client-facing workflows.",
  },
  {
    name: "Professional Websites",
    type: "Portfolio / Company / Landing",
    visual: "website",
    body: "Responsive, polished websites that present a brand clearly and guide visitors toward action.",
  },
  {
    name: "Data-Driven Dashboards",
    type: "Analytics / Records / Controls",
    visual: "dashboard",
    body: "Structured dashboards for browsing records, monitoring activity, and managing business data.",
  },
];

function ProjectVisual({ type }) {
  if (type === "pos") {
    return (
      <div className="project-visual pos-visual" aria-hidden="true">
        <div className="visual-sidebar">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-screen">
          <div className="visual-topline" />
          <div className="pos-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="pos-receipt">
            <span />
            <span />
            <strong />
          </div>
        </div>
      </div>
    );
  }

  if (type === "booking") {
    return (
      <div className="project-visual booking-visual" aria-hidden="true">
        <div className="booking-calendar">
          {Array.from({ length: 21 }).map((_, index) => (
            <span key={index} className={index === 9 || index === 15 ? "active" : ""} />
          ))}
        </div>
        <div className="booking-panel">
          <span />
          <strong />
          <span />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="project-visual website-visual" aria-hidden="true">
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="website-hero">
          <strong />
          <span />
          <span />
        </div>
        <div className="website-cards">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual dashboard-visual" aria-hidden="true">
      <div className="chart-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="dashboard-row">
        <strong />
        <span />
      </div>
      <div className="dashboard-row compact">
        <strong />
        <span />
      </div>
    </div>
  );
}

function EarthScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanupScene = () => {};

    Promise.all([
      import("three"),
      import("three/examples/jsm/renderers/SVGRenderer.js"),
    ])
      .then(([THREE, { SVGRenderer }]) => {
        if (disposed) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0.08, 7);

        const renderer = new SVGRenderer();
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        const globe = new THREE.Group();
        scene.add(globe);

        const ocean = new THREE.Mesh(
          new THREE.SphereGeometry(1.7, 18, 12),
          new THREE.MeshBasicMaterial({ color: 0xdde8e2, transparent: true, opacity: 0.97 })
        );
        globe.add(ocean);

        const gridMaterial = new THREE.MeshBasicMaterial({
          color: 0x1f4f46,
          transparent: true,
          opacity: 0.22,
        });

        [-55, -30, 0, 30, 55].forEach((lat) => {
          const radians = THREE.MathUtils.degToRad(lat);
          const radius = Math.cos(radians) * 1.75;
          const y = Math.sin(radians) * 1.75;
          const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 6, 52), gridMaterial);
          ring.position.y = y;
          ring.rotation.x = Math.PI / 2;
          globe.add(ring);
        });

        [0, 45, 90, 135].forEach((rotation) => {
          const meridian = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.005, 6, 52), gridMaterial);
          meridian.rotation.y = THREE.MathUtils.degToRad(rotation);
          globe.add(meridian);
        });

        const landMaterial = new THREE.MeshBasicMaterial({ color: 0x28594b, transparent: true, opacity: 0.88 });
        [
          [-110, 42, 0.5, 0.3],
          [-70, -12, 0.35, 0.5],
          [18, 32, 0.55, 0.34],
          [76, 28, 0.72, 0.36],
          [120, -8, 0.42, 0.22],
          [136, -26, 0.36, 0.22],
        ].forEach(([lon, lat, sx, sy], index) => {
          const phi = THREE.MathUtils.degToRad(90 - lat);
          const theta = THREE.MathUtils.degToRad(lon + 180);
          const radius = 1.76;
          const land = new THREE.Mesh(new THREE.CircleGeometry(0.26, 10), landMaterial);
          land.scale.set(sx, sy, 1);
          land.position.set(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          );
          land.lookAt(0, 0, 0);
          land.rotation.z += index % 2 ? -0.35 : 0.55;
          globe.add(land);
        });

        const orbit = new THREE.Mesh(
          new THREE.TorusGeometry(2.35, 0.01, 6, 72),
          new THREE.MeshBasicMaterial({ color: 0x9a6b4f, transparent: true, opacity: 0.48 })
        );
        orbit.rotation.x = Math.PI / 2.65;
        orbit.rotation.z = -Math.PI / 9;
        scene.add(orbit);

        const satellite = new THREE.Mesh(
          new THREE.BoxGeometry(0.13, 0.08, 0.08),
          new THREE.MeshBasicMaterial({ color: 0x151412 })
        );
        scene.add(satellite);

        const resize = () => {
          const { width, height } = mount.getBoundingClientRect();
          renderer.setSize(width, height);
          camera.aspect = width / Math.max(height, 1);
          camera.updateProjectionMatrix();
        };

        resize();
        window.addEventListener("resize", resize);

        const clock = new THREE.Clock();
        let animationId = 0;

        const animate = () => {
          const time = clock.getElapsedTime();
          globe.rotation.y = time * 0.17;
          globe.rotation.x = -0.2 + Math.sin(time * 0.35) * 0.025;
          orbit.rotation.z = -Math.PI / 9 + time * 0.08;
          satellite.position.set(Math.cos(time * 0.58) * 2.35, Math.sin(time * 0.58) * 0.75, 0.35);
          satellite.rotation.z = time;
          renderer.render(scene, camera);
          animationId = window.requestAnimationFrame(animate);
        };

        animate();
        mount.dataset.scene = "ready";

        cleanupScene = () => {
          window.cancelAnimationFrame(animationId);
          window.removeEventListener("resize", resize);
          scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) object.material.dispose();
          });
          if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
      })
      .catch((error) => {
        mount.dataset.scene = "failed";
        mount.dataset.error = String(error);
      });

    return () => {
      disposed = true;
      cleanupScene();
    };
  }, []);

  return <div ref={mountRef} className="earth-scene" aria-label="Animated Three.js Earth globe" />;
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const closeMenu = () => setIsMenuOpen(false);
  const showPreviousProject = () => {
    setActiveProject((current) => (current === 0 ? projects.length - 1 : current - 1));
  };
  const showNextProject = () => {
    setActiveProject((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  return (
    <main className={`site-shell ${isDark ? "theme-dark" : ""}`}>
      <nav className="site-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[-0.02em]" aria-label="Home">
            Jericho.
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="icon-button"
              type="button"
              onClick={() => setIsDark((value) => !value)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-action hidden sm:inline-flex" href={`mailto:${profile.email}`}>
              Let's Talk
            </a>
            <button
              className="icon-button md:hidden"
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="menu" className="mobile-menu md:hidden">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href={`mailto:${profile.email}`} onClick={closeMenu}>Let's Talk</a>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0">
          <EarthScene />
        </div>
        <div className="hero-wash" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="hero-content max-w-3xl">
            <p className="accent-text mb-5 flex items-center gap-2 text-sm font-medium">
              <MapPin size={16} />
              {profile.location}
            </p>
            <p className="muted-text mb-3 text-lg">I am {profile.name}</p>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Full-Stack Developer & Product Builder
            </h1>
            <p className="muted-text mt-7 max-w-2xl text-lg leading-8">
              I create responsive websites, application interfaces, backend APIs, and deployment-ready product experiences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-action" href={`mailto:${profile.email}`}>
                Start a Project
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href="#projects">
                View Work
                <Code2 size={18} />
              </a>
              <a className="secondary-action" href={profile.github}>
                GitHub
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Designing and building clean, scalable web experiences.</h2>
          </div>
          <p className="muted-text text-lg leading-8">
            A practical blend of frontend polish, backend awareness, and product-focused delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body, points }) => (
            <article key={title} className="service-card animated-card">
              <div className="flex items-start justify-between gap-5">
                <Icon className="text-[#28594b]" size={28} />
                <span className="h-px flex-1 bg-[#151412]/10" />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {points.map((point) => (
                  <span key={point} className="mini-pill">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
          <div>
            <p className="section-kicker text-[#9fc5b7]">About Me</p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
              I turn business ideas into interfaces people can actually use.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c9c0b2]">
              My work sits between clean design and dependable implementation: responsive layouts, component-driven UI, state management, API integration, and deployment-ready structure.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="stat-card">
              <span>03+</span>
              <p>Product directions</p>
            </div>
            <div className="stat-card">
              <span>17</span>
              <p>Core technologies</p>
            </div>
            <div className="stat-card">
              <span>AWS</span>
              <p>Cloud-ready builds</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title max-w-3xl">A stack organized for practical product development.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-card animated-card">
              <div className="mb-7 flex items-center justify-between">
                <h3>{group.title}</h3>
                <Globe2 className="text-[#28594b]" size={22} />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
            <div>
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">What I build for modern teams and businesses.</h2>
            </div>
            <p className="muted-text text-lg leading-8">
              Practical web products with clean interfaces, organized data, and reliable user flows.
            </p>
          </div>
          <div className="project-carousel" aria-label="Project carousel">
            <button className="carousel-button left" type="button" onClick={showPreviousProject} aria-label="Previous project">
              <ChevronLeft size={22} />
            </button>

            <div className="project-stage">
              {projects.map((project, index) => {
                const offset = index - activeProject;
                const normalizedOffset =
                  offset > projects.length / 2
                    ? offset - projects.length
                    : offset < -projects.length / 2
                      ? offset + projects.length
                      : offset;

                return (
                  <article
                    key={project.name}
                    className={`project-card carousel-card ${normalizedOffset === 0 ? "is-active" : ""}`}
                    style={{ "--offset": normalizedOffset }}
                    aria-hidden={normalizedOffset !== 0}
                  >
                    <ProjectVisual type={project.visual} />
                    <p className="text-sm font-medium text-[#8a7d6d]">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.body}</p>
                    <a
                      className="project-arrow"
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry: ${project.name}`)}`}
                      aria-label={`Ask about ${project.name}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </article>
                );
              })}
            </div>

            <button className="carousel-button right" type="button" onClick={showNextProject} aria-label="Next project">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="project-dots" aria-label="Choose project">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                className={activeProject === index ? "active" : ""}
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${project.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="contact-panel">
          <div>
            <p className="section-kicker">Start Your Project</p>
            <h2 className="section-title max-w-2xl">Build a beautiful, responsive website with me.</h2>
          </div>
          <div className="contact-card">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8a7d6d]">Quick Contact</p>
            <a className="mt-4 flex items-center gap-2 text-2xl font-semibold tracking-[-0.025em]" href={`mailto:${profile.email}`}>
              <Mail size={22} />
              {profile.email}
            </a>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#28594b]" href={profile.github}>
              View repositories
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer py-8">
        <div className="muted-text mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>{profile.role} / React / Django / AWS</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
