import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
        }
      })
    }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} style={{
      padding: '120px 0 0',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="section">
        {/* CTA block */}
        <div style={{ paddingBottom: '80px' }}>
          <h2 className="reveal" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '600px',
          }}>
            Let's build something extraordinary.
          </h2>
          <p className="reveal reveal-delay-1" style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '40px',
            maxWidth: '420px',
          }}>
            I'm always open to new opportunities and collaborations. Open to freelance work, full-time roles, and exciting builds.
          </p>

          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="mailto:usmaann912@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fff',
                color: '#000',
                fontSize: '14px',
                fontWeight: 500,
                padding: '11px 22px',
                borderRadius: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/aliu-kamalideen-usman-773982170"
              target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'transparent',
                color: 'var(--text)',
                fontSize: '14px',
                fontWeight: 400,
                padding: '11px 22px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '28px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span style={{
            fontSize: '14px',
            color: 'var(--text)',
            fontWeight: 500,
          }}>
            Aliu Kamalideen Usman
          </span>
          <span style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}>
            Lagos, Nigeria · 2026
          </span>
          <a
            href="https://www.linkedin.com/in/aliu-kamalideen-usman-773982170"
            target="_blank" rel="noreferrer"
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
