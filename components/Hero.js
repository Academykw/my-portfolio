const tools = [
  'Flutter', 'Dart', 'Java', 'Firebase', 'Android Studio',
  'MySQL', 'Git', 'GitHub', 'Figma', 'VSCode',
  'Google Play Console', 'Adobe Photoshop',
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: 'var(--nav-height)',
    }}>
      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '80px 40px 60px',
        width: '100%',
      }}>
        {/* Role badge */}
        <p style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          fontWeight: 400,
          letterSpacing: '0.01em',
          marginBottom: '24px',
          animation: 'fadeUp 0.5s 0.05s ease both',
        }}>
          Flutter &amp; Mobile App Developer
        </p>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '28px',
          maxWidth: '720px',
          animation: 'fadeUp 0.5s 0.1s ease both',
        }}>
          Building mobile experiences that users love.
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: '460px',
          marginBottom: '40px',
          fontWeight: 400,
          animation: 'fadeUp 0.5s 0.15s ease both',
        }}>
          Based in Lagos, Nigeria. I craft high-performance Flutter &amp; Android apps
          that are fast, beautiful, and built to scale.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.5s 0.2s ease both',
        }}>
          <a href="#work" style={{
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
            See My Work
          </a>
          <a href="#contact" style={{
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
            Get in Touch
          </a>
        </div>
      </div>

      {/* Marquee strip — same as reference */}
      <div style={{
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Gradient masks */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
          padding: '14px 0',
        }}>
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <span key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              paddingRight: '40px',
              letterSpacing: '0.01em',
            }}>
              {tool}
              <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>✦</span>
            </span>
          ))}
        </div>

        {/* Scroll label on right */}
        <div style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Scroll</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>↓</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:first-child { padding: 60px 20px 40px !important; }
        }
      `}</style>
    </section>
  )
}
