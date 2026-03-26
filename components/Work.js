import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const projects = [
  {
    num: '01',
    category: 'Flutter / Islamic',
    title: 'Adkhar App',
    role: 'Developer',
    desc: 'A beautifully designed Islamic dhikr and remembrance app built with Flutter. Elegant UI, offline support, and a seamless spiritual experience.',
    href: '/adkhar',
    playStore: 'https://play.google.com/store/apps/details?id=com.deen.adkhar',
    image: 'https://play-lh.googleusercontent.com/6eaRLneC5hyk5AIGRThQ0oDEUaye27MA9a_NTg0LUmKbPMeY_1MtIYv35lKDPA1FXcqRe2M4He_nKaHD9cFP=w480-h960',
    bg: '#0d1a12',
    accent: '#1a4a2a',
  },
  {
    num: '02',
    category: 'Flutter / Real-Time Communication',
    title: 'Telex',
    role: 'Flutter Mobile App Developer - Emerj LLC',
    desc: 'A real-time team communication platform built with Flutter and Dart. High-performance Chat UI with smooth scrolling and lazy loading for thousands of messages.',
    href: '/telex',
    playStore: 'https://play.google.com/store/apps/details?id=net.emerj.telex',
    image: 'https://play-lh.googleusercontent.com/xUdG-1KO1TWU8tOkVLftex5pYEVGk59_LsAiQXx4zYHDeuvDcIRXbOL3j0etiiW9iWhfivGmkAUx54HH8f-A=w480-h960',
    bg: '#0d1520',
    accent: '#1a2d4a',
  },
  {
    num: '03',
    category: 'Various',
    title: 'More Projects',
    role: 'Freelance & Internship Work',
    desc: 'Many more projects built across freelance engagements and internship programmes. Available on request.',
    href: null,
    playStore: null,
    bg: '#1a1a1a',
    accent: '#2a2a2a',
  },
  {
    num: '04',
    category: 'Open Source',
    title: 'GitHub Portfolio',
    role: 'Personal & Collaborative Projects',
    desc: 'Explore all my open source contributions, experiments, and personal Flutter/Android projects on GitHub.',
    href: null,
    playStore: null,
    github: 'https://github.com/Academykw',
    bg: '#111118',
    accent: '#1e1e2e',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const router = useRouter()

  const openProject = () => {
    if (project.href) router.push(project.href)
  }

  const handleKeyDown = e => {
    if (!project.href) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openProject()
    }
  }

  return (
    <div ref={cardRef} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        role={project.href ? 'link' : undefined}
        tabIndex={project.href ? 0 : undefined}
        style={{
          position: 'relative',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          transition: 'border-color 0.3s, transform 0.3s',
          cursor: project.href ? 'pointer' : 'default',
          background: project.bg,
          outline: 'none',
        }}
        onClick={openProject}
        onKeyDown={handleKeyDown}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#333'
          if (project.href) e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.transform = 'none'
        }}
        onFocus={e => {
          if (project.href) e.currentTarget.style.borderColor = '#555'
        }}
        onBlur={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        <div
          style={{
            height: '220px',
            background: `linear-gradient(135deg, ${project.bg} 0%, ${project.accent} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.05)',
              top: '-40px',
              right: '-40px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.04)',
              bottom: '-20px',
              left: '20px',
            }}
          />

          {project.image ? (
            <>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(8,8,8,0.08) 0%, rgba(8,8,8,0.34) 100%)',
                  zIndex: 1,
                }}
              />
              <img
                src={project.image}
                alt={`${project.title} Play Store preview`}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  height: '196px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 24px 30px rgba(0,0,0,0.35))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  zIndex: 3,
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.88)',
                  background: 'rgba(7,7,7,0.42)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px',
                  padding: '7px 10px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Play Store
              </div>
            </>
          ) : (
            <div
              style={{
                minWidth: '120px',
                minHeight: '120px',
                padding: '18px',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.88)',
                letterSpacing: '-0.02em',
              }}
            >
              {project.num === '03' ? 'More Projects' : 'GitHub'}
            </div>
          )}
        </div>

        <div style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {project.num} - {project.category}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  marginBottom: '2px',
                }}
              >
                {project.title}
              </h3>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  fontWeight: 400,
                }}
              >
                {project.role}
              </div>
            </div>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              &rarr;
            </div>
          </div>

          {project.href && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '14px',
                fontSize: '12px',
                color: 'var(--text-secondary)',
              }}
            >
              View app details
              <span>&rarr;</span>
            </div>
          )}

          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '20px',
            }}
          >
            {project.desc}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  transition: 'background 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
              >
                Play Store
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
              >
                GitHub &rarr;
              </a>
            )}
            {!project.playStore && !project.github && (
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  padding: '6px 0',
                }}
              >
                Available on request
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) obs.observe(sectionRef.current)

    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="section">
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '48px',
          }}
        >
          Selected Work
        </h2>

        <div
          className="work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
