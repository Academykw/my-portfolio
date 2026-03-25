import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: ['Flutter', 'Dart', 'Java', 'Android Studio'],
    color: '#06B6D4',
  },
  {
    title: 'Backend & Databases',
    icon: '🗄️',
    skills: ['Firebase', 'MySQL', 'REST APIs'],
    color: '#10b981',
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VSCode', 'Android SDK', 'Google Play Console', 'Figma', 'Adobe Photoshop'],
    color: '#f59e0b',
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: ['Adaptability', 'Critical Thinking', 'Problem-Solving', 'Communication', 'Teamwork', 'Detail Oriented'],
    color: '#8b5cf6',
  },
]

const eduItems = [
  {
    year: '2018 – 2023',
    title: 'B.Sc Computer Science & IT',
    sub: 'Federal University Dutsinma, Katsina',
    detail: 'GPA: 4.02',
  },
]

const certs = [
  {
    year: '2025',
    title: 'HNG Finalist',
    sub: 'Mobile Development Track',
    detail: 'Top 450 / 12,362',
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '120px 5vw' }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>Expertise</span>
        <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'var(--accent)', opacity: 0.5 }} />
      </div>

      <h2 className="reveal reveal-delay-1" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '4rem',
        color: 'var(--text)',
      }}>What I bring to the table.</h2>

      {/* Skill cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        marginBottom: '5rem',
      }} className="skills-grid">
        {skillGroups.map((group, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = group.color + '60'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${group.color}, transparent)`,
              }} />
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{group.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}>{group.title}</h3>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {group.skills.map((skill, si) => (
                  <span key={si} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: group.color,
                    background: group.color + '12',
                    border: `1px solid ${group.color}30`,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontWeight: 500,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education + Certification */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
      }} className="edu-grid">
        {/* Education */}
        <div className="reveal">
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '1.5rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border)',
            letterSpacing: '-0.01em',
          }}>Education</h3>
          {eduItems.map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '4px', letterSpacing: '0.05em' }}>{item.year}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{item.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{item.sub}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal reveal-delay-1">
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '1.5rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border)',
            letterSpacing: '-0.01em',
          }}>Certification</h3>
          {certs.map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '4px', letterSpacing: '0.05em' }}>{item.year}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{item.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{item.sub}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
