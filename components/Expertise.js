import { useEffect, useRef } from 'react'

const expertise = [
  {
    title: 'Mobile Development',
    tags: ['Flutter', 'Dart', 'Java', 'Android Studio', 'React Native'],
  },
  {
    title: 'Backend & Data',
    tags: ['Firebase', 'MySQL', 'REST APIs', 'Data Management'],
  },
  {
    title: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'VSCode', 'Android SDK', 'Google Play Console', 'Figma', 'Adobe Photoshop'],
  },
  {
    title: 'Soft Skills',
    tags: ['Adaptability', 'Critical Thinking', 'Problem-Solving', 'Communication', 'Teamwork'],
  },
]

const eduCerts = [
  {
    year: '2018 – 2023',
    org: 'Federal University Dutsinma, Katsina',
    title: 'B.Sc Computer Science & IT',
    note: 'GPA: 4.02',
  },
  {
    year: '2025',
    org: 'HNG Internship',
    title: 'HNG Finalist — Mobile Development Track',
    note: 'Top 450 / 12,362',
  },
]

export default function Expertise() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="section">
        <h2 className="reveal" style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '48px',
        }}>
          Expertise
        </h2>

        {/* Expertise groups */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          marginBottom: '64px',
        }}>
          {expertise.map((group, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 60}ms`,
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '32px',
                padding: '24px 0',
                borderTop: '1px solid var(--border)',
                alignItems: 'start',
              }}
            >
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text)',
                paddingTop: '2px',
              }}>{group.title}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    background: 'var(--tag-bg)',
                    border: '1px solid var(--border)',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontWeight: 400,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Education & Certification */}
        <h3 className="reveal" style={{
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
        }}>Education &amp; Certification</h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eduCerts.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 60}ms`,
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '32px',
                padding: '20px 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                paddingTop: '2px',
              }}>{item.year}</div>
              <div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '3px',
                  letterSpacing: '-0.01em',
                }}>{item.title}</div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginBottom: '4px',
                }}>{item.org}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}>{item.note}</div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: 200px"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
