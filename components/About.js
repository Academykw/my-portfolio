import { useEffect, useRef, useState } from 'react'

function useCountUp(end, duration = 1800, trigger = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = null
    const step = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      // ease out
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, end, duration])
  return val
}

const stats = [
  { value: 3, suffix: '+', label: 'Years of experience' },
  { value: 2, suffix: '', label: 'Apps on Play Store' },
  { value: 450, suffix: '', label: 'HNG interns outlasted' },
  { value: 1, suffix: '', label: 'Active role (Emerj LLC)' },
]

export default function About() {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)

  const c0 = useCountUp(stats[0].value, 1200, triggered)
  const c1 = useCountUp(stats[1].value, 1000, triggered)
  const c2 = useCountUp(stats[2].value, 2000, triggered)
  const c3 = useCountUp(stats[3].value, 900, triggered)
  const counts = [c0, c1, c2, c3]

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTriggered(true)
        sectionRef.current.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
        obs.disconnect()
      }
    }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: '120px 0' }}
    >
      <div className="section">
        {/* Section heading */}
        <h2 className="reveal" style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '64px',
          lineHeight: 1.1,
        }}>
          Mobile developer<br />&amp; engineer.
        </h2>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          borderTop: '1px solid var(--border)',
          borderLeft: '1px solid var(--border)',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
        }} className="reveal reveal-delay-1 stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              borderRight: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {counts[i]}{s.suffix}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                fontWeight: 400,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio text */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }} className="reveal reveal-delay-2 bio-grid">
          <div>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '20px',
            }}>
              I am Aliu Kamalideen Usman, a results-driven Mobile App Developer with 3+ years of experience building high-performance mobile applications using Flutter and Android Studio.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
            }}>
              I combine strong IT support experience with deep expertise in Dart and Java to deliver apps users actually enjoy. Currently building real-time communication tools at Emerj LLC.
            </p>
          </div>

          <div>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '32px',
            }}>
              I am building <strong style={{ color: 'var(--text)' }}>Adkhar</strong>, a beautifully crafted Islamic dhikr app, and I work as a Flutter Developer at <strong style={{ color: 'var(--text)' }}>Emerj LLC</strong> where I develop Telex, a real-time team communication platform.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/aliu-kamalideen-usman-773982170"
                target="_blank" rel="noreferrer"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  borderBottom: '1px solid #444',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.target.style.borderColor = '#fff'}
                onMouseLeave={e => e.target.style.borderColor = '#444'}
              >LinkedIn</a>
              <a
                href="mailto:usmaann912@gmail.com"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  borderBottom: '1px solid #444',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.target.style.borderColor = '#fff'}
                onMouseLeave={e => e.target.style.borderColor = '#444'}
              >Email</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bio-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
