import Head from 'next/head'
import Link from 'next/link'

export default function Adkhar() {
  return (
    <>
      <Head>
        <title>Adkhar App | Aliu Kamalideen Usman</title>
        <meta name="description" content="A beautifully designed Islamic dhikr and remembrance app built with Flutter." />
      </Head>

      <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font)', paddingTop: '80px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '60px 40px' }}>
          {/* Back link */}
          <Link href="/" style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '48px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 500 }}>
              Flutter / Islamic
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '8px' }}>Adkhar App</h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>Developer</p>
          </div>

          {/* Meta */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '64px',
          }}>
            {[
              { label: 'Period', value: 'Oct 2025 – Present' },
              { label: 'Role', value: 'Developer' },
              { label: 'Platform', value: 'Android (Flutter)' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '24px',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Banner placeholder */}
          <div style={{
            width: '100%',
            height: '360px',
            background: 'linear-gradient(135deg, #0d1a12 0%, #1a4a2a 100%)',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '64px',
            fontSize: '64px',
          }}>
            🕌
          </div>

          {/* Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '60px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>Overview</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
                Adkhar is a beautifully designed Islamic dhikr and remembrance app built with Flutter. The app provides Muslims with a serene, distraction-free environment for their daily remembrance (dhikr) practice.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '40px' }}>
                Features include curated collections of authentic adhkar, prayer time integration, offline support, and a calm, intentional UI that respects the spiritual nature of the content.
              </p>

              <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>My Contribution</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I built the entire mobile application using Flutter and Dart, implementing Firebase for data management, designing the UI/UX with attention to cultural sensitivity, and deploying to Google Play Store.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Quick Info</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                A Qur'an-centered dhikr companion for spiritual consistency and daily remembrance.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.deen.adkhar"
                target="_blank" rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#fff',
                  color: '#000',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '10px 18px',
                  borderRadius: '8px',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                ▶ View on Play Store
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '28px 40px', maxWidth: 'var(--max-width)', margin: '80px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>Aliu Kamalideen Usman</span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Lagos, Nigeria · 2026</span>
          <a href="https://www.linkedin.com/in/aliu-kamalideen-usman-773982170" target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>LinkedIn</a>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; color: #fff; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        :root {
          --bg: #0a0a0a; --bg-card: #111; --border: #1f1f1f;
          --text: #fff; --text-secondary: #888; --text-muted: #555;
          --max-width: 1100px; --font: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 280px"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
