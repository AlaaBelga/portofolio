import { useEffect, useState } from "react"

const Arrow = () => <span aria-hidden="true">↗</span>

const navItems = [
  ["À propos", "#apropos"],
  ["Formation", "#formation"],
  ["Expérience", "#experience"],
  ["Projets", "#projets"],
  ["Interview", "#interview"],
]

const education = [
  {
    year: "2024 — 2025",
    label: "ANNÉE 01",
    title: "Fondations mathématiques, statistiques et économiques",
    description:
      "Une première année consacrée à l'analyse quantitative, à la statistique appliquée, à la programmation et aux fondamentaux économiques.",
    courses: [
      "Probabilités et inférence statistique",
      "Statistique descriptive et analyse de données",
      "Réduction de dimension et programmation SAS",
      "Régression linéaire et séries chronologiques",
      "Programmation linéaire et analyse numérique",
      "Microéconomie, macroéconomie et comptabilité nationale",
      "Algorithmique, bases de données et développement web",
    ],
  },
  {
    year: "2025 — 2026",
    label: "ANNÉE 02",
    title: "Ingénierie logicielle, systèmes et intelligence artificielle",
    description:
      "Approfondissement de la conception logicielle, des architectures informatiques, des systèmes de données et de l'IA.",
    courses: [
      "Programmation orientée objet avancée",
      "Conception et modélisation des systèmes d'information",
      "Bases de données avancées",
      "Data warehousing et Business Analytics",
      "Data mining, web mining et text mining",
      "Intelligence artificielle",
      "IoT, virtualisation et Cloud Computing",
      "Développement mobile et frameworks",
      "Génie logiciel et architecture réseaux",
    ],
  },
  {
    year: "2026 — 2027",
    label: "ANNÉE 03",
    title: "Spécialisation avancée et projet de fin d'études",
    description:
      "Dernière année orientée vers les technologies avancées du logiciel et de la donnée, suivie du projet de fin d'études.",
    courses: [
      "Machine Learning et Deep Learning",
      "Big Data : plateformes et langages",
      "DevOps et DataOps",
      "BPM et microservices",
      "Sécurité informatique",
      "Architecture des systèmes d'information",
      "Qualité logicielle et conduite de projets",
    ],
  },
]

const experiences = [
  {
    date: "Juil. — Août 2026",
    place: "Fès Shore, Maroc",
    company: "Capgemini Engineering",
    role: "Stage en ingénierie logicielle IA",
    paragraphs: [
      "Développement d'une plateforme intelligente d'évaluation de brevets pour Stellantis, exploitant le traitement automatique du langage naturel, TF-IDF et la similarité cosinus.",
      "Automatisation de l'analyse et de la génération de rapports, permettant de ramener un processus manuel d'environ une heure à quelques secondes.",
    ],
    link: [
      "Explorer Smart Patent sur GitHub",
      "https://github.com/AlaaBelga/smart-patent",
    ],
  },
  {
    date: "Juillet 2025",
    place: "Rabat, Maroc",
    company: "INPT",
    role: "Stage Data & Backend",
    paragraphs: [
      "Conception d'un pipeline automatisé de web scraping intégrant une validation humaine (human-in-the-loop), une base de données MySQL et un backend PHP.",
    ],
    link: [
      "Voir CyborgScraper sur GitHub",
      "https://github.com/AlaaBelga/CyborgScraper",
    ],
  },
  {
    date: "2025 — 2026",
    place: "Rabat, Maroc",
    company: "Smart Touch Agdal",
    role: "Enseignement de l'anglais",
    paragraphs: [
      "Enseignement auprès d'apprenants adultes et création d'outils pédagogiques numériques, de sites web et de jeux interactifs. Une expérience qui a renforcé mes compétences en communication, en pédagogie et en conception centrée sur l'utilisateur.",
    ],
  },
]

const projects = [
  {
    index: "01 / FEATURED",
    name: "Dermascope AI",
    kicker: "2e place · Hackathon international ICESCO",
    description:
      "Solution de dépistage dermatologique assisté par intelligence artificielle, utilisant un jeu de données de 15 000 images adapté aux peaux locales.",
    tags: ["Computer Vision", "Deep Learning", "Hugging Face"],
    links: [
      ["Démo live", "https://dermascopeai.netlify.app"],
      ["Interview vidéo", "https://www.youtube.com/watch?v=BDn34WqEOdE"],
    ],
    kind: "vision",
    featured: true,
  },
  {
    index: "02 / FEATURED",
    name: "DentaLens",
    kicker: "3e place · Hackathon Data INPT × MedConnect",
    description:
      "Solution full-stack d'aide à l'analyse d'images dentaires avec détection automatique des lésions par YOLOv8 et visualisation 3D interactive. Réalisée en équipe de deux en 48 heures.",
    tags: ["YOLOv8", "Computer Vision", "3D"],
    links: [["Code GitHub", "https://github.com/Aicha-Laribia/DentaLens"]],
    kind: "scan",
    featured: true,
  },
  {
    index: "03",
    name: "Smart Patent",
    kicker: "Stage · Capgemini Engineering",
    description:
      "Plateforme d'analyse intelligente de brevets, exploitant le NLP et la similarité textuelle pour automatiser leur évaluation et la production de rapports.",
    tags: ["Python", "NLP", "TF-IDF"],
    links: [["Code GitHub", "https://github.com/AlaaBelga/smart-patent"]],
    kind: "text",
  },
  {
    index: "04",
    name: "Maintenance prédictive",
    visualName: "Predictive Maintenance",
    kicker: "Machine Learning · DevOps",
    description:
      "Modélisation prédictive associée à une infrastructure DevOps auto-réparatrice, avec conteneurisation, orchestration et surveillance des services.",
    tags: ["Machine Learning", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    links: [
      ["Code GitHub", "https://github.com/AlaaBelga/auto-remediation-platform"],
    ],
    kind: "infra",
  },
]

function DataMotif() {
  return (
    <div className="data-motif" aria-hidden="true">
      <svg viewBox="0 0 560 560" role="presentation">
        <defs>
          <filter id="node-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle className="orbit orbit-a" cx="280" cy="280" r="218" />
        <circle className="orbit orbit-b" cx="280" cy="280" r="148" />
        <path className="axis" d="M62 460H510M93 76V485" />
        <path
          className="histogram"
          d="M116 440v-25h22v25m12 0v-61h22v61m12 0v-94h22v94m12 0v-131h22v131m12 0v-72h22v72"
        />
        <path
          className="signal"
          d="M44 360 C118 340 112 250 184 270 S260 400 323 302 408 152 515 190"
        />
        <path
          className="signal signal-soft"
          d="M57 420 C150 403 164 353 229 370 S349 434 498 315"
        />
        <path
          className="network"
          d="M323 302 389 240 437 287 515 190M389 240 404 374 498 315M437 287 404 374"
        />
        {[
          [44, 360],
          [184, 270],
          [323, 302],
          [515, 190],
          [57, 420],
          [229, 370],
          [498, 315],
          [280, 132],
          [148, 280],
          [404, 374],
        ].map(([x, y], index) => (
          <circle
            key={index}
            className={index < 4 ? "node node-bright" : "node"}
            cx={x}
            cy={y}
            r={index < 4 ? 7 : 4}
            filter={index === 3 ? "url(#node-glow)" : undefined}
          />
        ))}
        <text x="88" y="116">
          01 / OBSERVE
        </text>
        <text x="251" y="223">
          02 / MODEL
        </text>
        <text x="401" y="163">
          03 / BUILD
        </text>
        <text x="378" y="468">
          SIGNAL → SYSTEM
        </text>
      </svg>
      <div className="motif-label">
        <span>15K</span> points analysés
      </div>
      <div className="motif-status">
        SYSTEM ONLINE <i />
      </div>
    </div>
  )
}

function SectionHeading({
  number,
  eyebrow,
  children,
  intro,
}: {
  number: string
  eyebrow: string
  children: React.ReactNode
  intro?: string
}) {
  return (
    <div className="section-heading reveal">
      <p className="section-label">
        {number} / {eyebrow}
      </p>
      <div>
        <h2>{children}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  )
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  const diagrams = {
    vision: (
      <svg viewBox="0 0 600 360" role="presentation">
        <path
          className="contour c1"
          d="M181 63c75-37 167-16 213 38 43 50 51 141-7 185-58 45-178 40-237-18-58-58-36-171 31-205Z"
        />
        <path
          className="contour c2"
          d="M211 98c50-27 122-13 153 28 31 40 25 104-15 132-43 30-124 20-160-20-36-41-26-113 22-140Z"
        />
        <path
          className="contour c3"
          d="M249 135c26-15 64-4 81 19 17 23 9 59-14 74-25 15-66 5-81-19-15-24-9-60 14-74Z"
        />
        <path className="scan-line" d="M70 178H530" />
        <circle className="target" cx="287" cy="181" r="9" />
        <text x="75" y="164">
          SCAN_01542
        </text>
        <text x="433" y="200">
          CONF. 94.2%
        </text>
      </svg>
    ),
    scan: (
      <svg viewBox="0 0 600 360" role="presentation">
        <path
          className="jaw"
          d="M118 144c48-67 121-88 182-88s134 21 182 88c-29 103-91 157-182 157S147 247 118 144Z"
        />
        <path
          className="jaw inner"
          d="M165 151c35-38 82-57 135-57s100 19 135 57c-26 65-70 104-135 104s-109-39-135-104Z"
        />
        {[210, 255, 300, 345, 390].map((x, index) => (
          <rect
            key={x}
            className={index === 2 ? "detection active" : "detection"}
            x={x - 17}
            y={128 + Math.abs(index - 2) * 8}
            width="34"
            height="53"
          />
        ))}
        <path className="scan-line" d="M70 213H530" />
        <text x="76" y="198">
          YOLO / FRAME 048
        </text>
        <text x="405" y="238">
          LESION_01
        </text>
      </svg>
    ),
    text: (
      <svg viewBox="0 0 600 360" role="presentation">
        {[0, 1, 2, 3, 4].map((row) => (
          <path
            key={row}
            className="document-line"
            d={`M115 ${102 + row * 34}H${330 + (row % 2) * 72}`}
          />
        ))}
        <circle className="semantic-node" cx="420" cy="118" r="32" />
        <circle className="semantic-node" cx="473" cy="208" r="23" />
        <circle className="semantic-node" cx="377" cy="248" r="18" />
        <path
          className="semantic-link"
          d="M420 150 473 185M401 142l-24 88m21 13 55-27M330 170l63-38M365 238l-62-31"
        />
        <text x="116" y="83">
          PATENT CORPUS
        </text>
        <text x="404" y="122">
          TF-IDF
        </text>
      </svg>
    ),
    infra: (
      <svg viewBox="0 0 600 360" role="presentation">
        <path
          className="metric"
          d="M60 230h52l18-76 28 137 28-99 23 38h52l18-49 24 49h61l26-120 29 120h91"
        />
        {[
          [125, 100],
          [300, 92],
          [468, 105],
          [214, 277],
          [393, 281],
        ].map(([x, y], index) => (
          <g key={x}>
            <rect
              className="server"
              x={x - 35}
              y={y - 23}
              width="70"
              height="46"
            />
            <circle
              className={index === 3 ? "server-light alert" : "server-light"}
              cx={x + 21}
              cy={y}
              r="4"
            />
          </g>
        ))}
        <path
          className="server-link"
          d="M160 100h105m70-2 98 4M144 123l52 131m87-139-53 139m88-139 58 143m78-133-47 133M249 277h109"
        />
        <text x="88" y="68">
          AUTO-REMEDIATION / LIVE
        </text>
        <text x="396" y="316">
          05 SERVICES
        </text>
      </svg>
    ),
  }

  return (
    <div className={`project-visual visual-${project.kind}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="project-index">{project.index}</span>
      <div className="project-diagram">
        {diagrams[(project.kind as keyof typeof diagrams)]}
      </div>
      <span className="visual-coordinate">N 34.0209° · W 6.8416°</span>
      <strong>{project.visualName || project.name}</strong>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    const updateProgress = () => {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${distance > 0 ? window.scrollY / distance : 0}`,
      )
    }
    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const precisePointer = window.matchMedia("(pointer: fine)").matches
    const cursor = document.querySelector<HTMLElement>(".motion-cursor")
    let frame = 0
    const moveCursor = (event: PointerEvent) => {
      if (reducedMotion || !precisePointer || !cursor) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        cursor.style.setProperty("--cursor-x", `${event.clientX}px`)
        cursor.style.setProperty("--cursor-y", `${event.clientY}px`)
      })
    }
    const hoverTargets = document.querySelectorAll("a, button, summary")
    const cursorEnter = () => cursor?.classList.add("is-active")
    const cursorLeave = () => cursor?.classList.remove("is-active")
    hoverTargets.forEach((target) => {
      target.addEventListener("pointerenter", cursorEnter)
      target.addEventListener("pointerleave", cursorLeave)
    })

    const cards = document.querySelectorAll<HTMLElement>(".project-card")
    const tiltHandlers = new Map<HTMLElement, {
      move: (event: PointerEvent) => void
      leave: () => void
    }>()
    cards.forEach((card) => {
      const move = (event: PointerEvent) => {
        if (reducedMotion || !precisePointer) return
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        card.style.setProperty("--tilt-x", `${-y * 4}deg`)
        card.style.setProperty("--tilt-y", `${x * 5}deg`)
        card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`)
        card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`)
      }
      const leave = () => {
        card.style.setProperty("--tilt-x", "0deg")
        card.style.setProperty("--tilt-y", "0deg")
      }
      card.addEventListener("pointermove", move)
      card.addEventListener("pointerleave", leave)
      tiltHandlers.set(card, { move, leave })
    })

    window.addEventListener("pointermove", moveCursor, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("pointermove", moveCursor)
      cancelAnimationFrame(frame)
      hoverTargets.forEach((target) => {
        target.removeEventListener("pointerenter", cursorEnter)
        target.removeEventListener("pointerleave", cursorLeave)
      })
      tiltHandlers.forEach(({ move, leave }, card) => {
        card.removeEventListener("pointermove", move)
        card.removeEventListener("pointerleave", leave)
      })
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Navigation principale">
          <a href="#accueil" className="logo" aria-label="Alaa Belga, accueil">
            Alaa <span>Belga.</span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="mobile-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Me contacter <Arrow />
            </a>
          </div>
          <a className="nav-contact" href="#contact">
            Me contacter <Arrow />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>
      <aside className="signal-rail" aria-hidden="true">
        <span className="rail-origin">SIGNAL</span>
        <i>
          <b />
        </i>
        <span className="rail-end">SYSTEM</span>
      </aside>
      <div className="motion-cursor" aria-hidden="true">
        <i />
      </div>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-copy reveal">
            <div className="hero-topline">
              <p className="eyebrow">PORTFOLIO · DATA & SOFTWARE ENGINEERING</p>
              <p className="availability">
                <span /> Ouverte aux opportunités de stage PFE 2027
              </p>
            </div>
            <h1>
              <span className="kinetic-line">
                <span>De</span> <span>la</span> <span>donnée</span>{" "}
                <span>à</span> <span>des</span>
              </span>
              <em className="kinetic-line">
                <span>solutions</span> <span>concrètes.</span>
              </em>
            </h1>
            <div className="hero-bottom">
              <p className="hero-description">
                Je suis <strong>Alaa Belga</strong>, élève-ingénieure en
                dernière année à l'<strong>INSEA</strong>, passionnée par
                l'intelligence artificielle, la data et l'ingénierie logicielle.
                J'aime transformer des idées complexes en applications utiles,
                de la conception à l'implémentation.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projets">
                  Explorer mes projets <Arrow />
                </a>
                <a className="button button-secondary" href="#interview">
                  Voir mon interview <Arrow />
                </a>
              </div>
            </div>
          </div>
          <DataMotif />
          <div className="achievement-strip reveal">
            <p>PROFIL / EN UN COUP D'ŒIL</p>
            <div>
              <strong>INSEA</strong>
              <span>
                Data & Software
                <br />
                Engineering
              </span>
            </div>
            <div>
              <strong>02</strong>
              <span>
                Podiums en
                <br />
                hackathons IA
              </span>
            </div>
            <div>
              <strong>Capgemini</strong>
              <span>
                Expérience en
                <br />
                ingénierie IA
              </span>
            </div>
            <div>
              <strong>PFE 2027</strong>
              <span>
                Ouverte aux
                <br />
                opportunités
              </span>
            </div>
          </div>
        </section>
        <div className="signal-marquee" aria-hidden="true">
          <div>
            <span>DATA ENGINEERING</span>
            <i />
            <span>INTELLIGENCE ARTIFICIELLE</span>
            <i />
            <span>SOFTWARE SYSTEMS</span>
            <i />
            <span>FROM SIGNAL TO IMPACT</span>
            <i />
            <span>DATA ENGINEERING</span>
            <i />
            <span>INTELLIGENCE ARTIFICIELLE</span>
            <i />
            <span>SOFTWARE SYSTEMS</span>
            <i />
            <span>FROM SIGNAL TO IMPACT</span>
            <i />
          </div>
        </div>

        <section id="apropos" className="section about-section">
          <SectionHeading number="01" eyebrow="À PROPOS">
            Curieuse par nature.
            <br />
            <span>Ingénieure par vocation.</span>
          </SectionHeading>
          <div className="about-grid">
            <div className="about-main reveal">
              <p className="about-lead">
                Mon parcours se situe à la rencontre des{" "}
                <strong>
                  mathématiques, des statistiques, de l'informatique et de
                  l'intelligence artificielle.
                </strong>
              </p>
              <div className="about-columns">
                <p>
                  À l'INSEA, j'ai d'abord développé une base solide en
                  probabilités, statistique, analyse de données et économie,
                  avant d'approfondir l'ingénierie logicielle, les systèmes de
                  données et l'IA.
                </p>
                <p>
                  Ce qui me motive particulièrement, c'est de construire des
                  produits qui dépassent le stade du prototype : des solutions
                  fonctionnelles, compréhensibles et pensées pour leurs
                  utilisateurs.
                </p>
                <p>
                  Mes expériences en entreprise, mes projets personnels et les
                  hackathons m'ont appris à travailler en équipe, à expérimenter
                  rapidement et à aborder des problématiques concrètes.
                </p>
              </div>
            </div>
            <aside
              className="about-sidebar reveal"
              aria-label="Informations personnelles"
            >
              {[
                ["Localisation", "Rabat, Maroc"],
                ["Établissement", "INSEA"],
                ["Spécialité", "Data & Software Engineering"],
                ["Langues", "Arabe · Français · Anglais"],
                [
                  "Centres d'intérêt techniques",
                  "Data · IA · Backend · DevOps",
                ],
              ].map(([label, value]) => (
                <div className="info-item" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section id="formation" className="section education-section">
          <SectionHeading number="02" eyebrow="FORMATION">
            Une formation à l'intersection
            <br />
            <span>de la data et du logiciel.</span>
          </SectionHeading>
          <div className="school-header reveal">
            <p className="school-period">2024 — 2027</p>
            <h3>Institut National de Statistique et d'Économie Appliquée</h3>
            <p>
              INSEA · Rabat, Maroc
              <br />
              Cycle ingénieur — Data & Software Engineering
            </p>
          </div>
          <p className="education-intro reveal">
            Ma formation suit une progression que j'apprécie particulièrement :
            comprendre les données et les phénomènes qu'elles représentent,
            apprendre à construire des systèmes logiciels, puis mobiliser ces
            deux compétences pour développer des solutions d'intelligence
            artificielle.
          </p>
          <div className="education-timeline">
            {education.map((item, index) => (
              <article className="education-step reveal" key={item.year}>
                <div className="timeline-marker">
                  <span>0{index + 1}</span>
                </div>
                <div className="education-meta">
                  <span>{item.year}</span>
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <details>
                  <summary>
                    Voir les enseignements <span>+</span>
                  </summary>
                  <ul>
                    {item.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </details>
              </article>
            ))}
          </div>
          <div className="previous-education reveal">
            <span>2022 — 2024</span>
            <h3>Classes préparatoires aux grandes écoles</h3>
            <p>
              CPGE Moulay Idriss · Fès
              <br />
              Filière MP — Mathématiques et Physique
            </p>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <SectionHeading number="03" eyebrow="EXPÉRIENCE">
            De la théorie
            <br />
            <span>à la pratique.</span>
          </SectionHeading>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-item reveal" key={item.company}>
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-meta">
                  <span>{item.date}</span>
                  <span>{item.place}</span>
                </div>
                <div className="experience-content">
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {item.link && (
                    <a
                      className="text-link"
                      href={item.link[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link[0]} <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="section projects-section">
          <SectionHeading
            number="04"
            eyebrow="PROJETS"
            intro="Une sélection de projets développés en stage, en hackathon et dans le cadre de mes explorations personnelles."
          >
            Construire. Expérimenter.
            <br />
            <span>Résoudre.</span>
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card reveal ${
                  project.featured ? "featured" : ""
                }`}
                key={project.name}
              >
                <ProjectVisual project={project} />
                <div className="project-details">
                  <p
                    className={project.featured ? "award" : "project-category"}
                  >
                    {project.featured && <i aria-hidden="true" />}
                    {project.kicker}
                  </p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="more-projects reveal">
            <div className="more-title">
              <p className="section-label">EN COMPLÉMENT</p>
              <h3>Autres réalisations</h3>
            </div>
            <div className="mini-project-list">
              {[
                [
                  "DermAI Mobile",
                  "Application Android de triage dermatologique hors ligne, avec EfficientNet, Kotlin, Jetpack Compose et navigation 3D.",
                  "https://github.com/AlaaBelga/DermAI",
                ],
                [
                  "Application de gestion RH",
                  "Application de bureau multiplateforme utilisant Electron, React, Node.js et PostgreSQL.",
                  "https://github.com/AlaaBelga/hr-management-system",
                ],
                [
                  "Complétion d'images avec I-JEPA",
                  "Exploration du modèle I-JEPA de Meta AI pour la complétion d'images.",
                  "https://github.com/AlaaBelga/IJEPA",
                ],
              ].map(([name, description, href], index) => (
                <article className="mini-project" key={name}>
                  <span>0{index + 1}</span>
                  <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} sur GitHub`}
                  >
                    GitHub <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competences" className="section skills-section">
          <SectionHeading number="05" eyebrow="COMPÉTENCES">
            Mon environnement
            <br />
            <span>technique.</span>
          </SectionHeading>
          <div className="skills-grid">
            {[
              [
                "Programmation",
                "Python · Java · JavaScript · TypeScript · SQL · Kotlin · PHP",
              ],
              [
                "Intelligence artificielle & Data",
                "Machine Learning · Deep Learning · NLP · Computer Vision · Data Mining",
              ],
              [
                "Software Engineering",
                "React · Angular · Node.js · FastAPI · API REST · Tests unitaires",
              ],
              [
                "Infrastructure & Bases de données",
                "Docker · Kubernetes · AWS · CI/CD · PostgreSQL · MySQL · Git",
              ],
            ].map(([title, skills], index) => (
              <div className="skill-group reveal" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{skills}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="interview" className="section interview-section">
          <SectionHeading
            number="06"
            eyebrow="DANS LES MÉDIAS"
            intro="Découvrez notre passage en interview à l'occasion du projet Dermascope AI, récompensé lors d'un hackathon international d'intelligence artificielle."
          >
            Au-delà
            <br />
            <span>du code.</span>
          </SectionHeading>
          <div className="video-feature reveal">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/BDn34WqEOdE"
                title="Interview Dermascope AI"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="video-caption">
              <span>INTERVIEW · DERMASCOPE AI</span>
              <a
                href="https://www.youtube.com/watch?v=BDn34WqEOdE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regarder sur YouTube <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-top reveal">
            <p className="section-label">07 / CONTACT</p>
            <p>Disponible pour un PFE en 2027</p>
          </div>
          <h2 className="reveal">
            Et si nous construisions
            <br />
            <em>quelque chose ensemble ?</em>
          </h2>
          <div className="contact-bottom reveal">
            <p>
              Je recherche un stage de fin d'études en 2027, autour de
              l'intelligence artificielle, de la data et de l'ingénierie
              logicielle. Je serais ravie d'échanger sur vos projets et sur la
              manière dont je pourrais y contribuer.
            </p>
            <a className="contact-email" href="mailto:alaabelga@gmail.com">
              alaabelga@gmail.com <Arrow />
            </a>
          </div>
          <div className="social-links reveal">
            <a
              href="https://www.linkedin.com/in/alaa-belga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              href="https://github.com/AlaaBelga"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Alaa Belga</span>
        <span>Conçu avec curiosité, construit avec intention.</span>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  )
}
