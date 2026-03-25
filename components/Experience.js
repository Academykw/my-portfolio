import { useEffect, useRef } from 'react'

const experiences = [
  {
    date: 'Dec 2025 – Present',
    company: 'Emerj LLC',
    role: 'Flutter Mobile App Developer',
    desc: 'Collaborating in an Agile environment with a cross-functional team to build Telex, a real-time team communication platform. Developing a high-performance Chat UI with smooth scrolling and lazy loading.',
    current: true,
  },
  {
    date: 'Oct 2025 – Dec 2025',
    company: 'HNG 13 Internship',
    role: 'Mobile Development Finalist',
    desc: 'Recognized as outstanding in the mobile development track — finished in the top 450 out of 12,362 interns. Designed apps from stage 1–10 and collaborated with junior and senior designers to develop Telex.',
    current: false,
  },
  {
    date: 'Oct 2019 – May 2023',
    company: 'Sirwhite Technology',
    role: 'Mobile App Developer',
    desc: 'Developed and deployed diverse mobile applications, consistently meeting client requirements. Utilized Flutter and Android Studio to create cross-platform and native applications resulting in high user engagement.',
    current: false,
  },
  {
    date: 'Aug 2022 – Sep 2022',
    company: 'Dangote Fertilizer Company',
    role: 'IT Support',
    desc: 'Provided effective technical support, resolving hardware and software issues promptly. Maintained IT infrastructure and supported implementation of new technology solutions.',
    current: false,
  },
  {
    date: 'Nov 2021 – Jun 2022',
    company: 'FRCN Ikoyi',
    role: 'IT Support & System Maintenance Intern',
    desc: 'Assisted in maintenance and troubleshooting of IT infrastructure. Delivered first-line IT support, addressing user inquiries and resolving technical issues.',
    current: false,
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} style={{ padding: '120px 0' }}>
      <div className="section">
        <h2 className="reveal" style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '48px',
        }}>
          Experience
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 60}ms`,
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: '32px',
                padding: '28px 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              {/* Date */}
              <div style={{
                fontSize: '13px',
                color: exp.current ? 'var(--text)' : 'var(--text-muted)',
                paddingTop: '3px',
                lineHeight: 1.4,
                fontWeight: exp.current ? 500 : 400,
              }}>
                {exp.date}
              </div>

              {/* Content */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '4px',
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                  }}>{exp.company}</h3>
                  {exp.current && (
                    <span style={{
                      fontSize: '11px',
                      color: '#4ade80',
                      background: 'rgba(74, 222, 128, 0.1)',
                      border: '1px solid rgba(74, 222, 128, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      fontWeight: 500,
                    }}>Current</span>
                  )}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px',
                  fontWeight: 400,
                }}>{exp.role}</div>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                }}>{exp.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section > div > div > div[style*="grid-template-columns: 160px"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
