import Head from 'next/head'
import Link from 'next/link'

export default function Telex() {
  const screenshots = [
    'https://play-lh.googleusercontent.com/YUkg0IyH9Wm6tjguqsTpGiyFlVIjQJjQ48CcxRSZzbsJjAUUgvkX4a45uj01a8GhMfrhvdg9U_7pbfPZ7uLF3g=w526-h296',
    'https://play-lh.googleusercontent.com/YODySnQZLGDNzqUpqplGc6YG_kugMp-S-azhEunyhpnBpk2AfWQYCnCaXWdc3_aHga6bzfN8eftjhrx3c2I-gA=w526-h296',
    'https://play-lh.googleusercontent.com/4yHqhPPowyiDHhPU9fWlvjxwShQVnTpmkWJYPivJAa6F8wBKFMGsFcZv6aexL95ihi1tOy_P2G39vJ52l8je7g=w526-h296',
  ]

  return (
    <>
      <Head>
        <title>Telex | Aliu Kamalideen Usman</title>
        <meta name="description" content="A real-time team communication platform built with Flutter and Dart." />
      </Head>

      <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font)', paddingTop: '80px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '60px 40px' }}>
          <Link href="/" style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '48px',
            transition: 'color 0.2s',
          }}>
            ← Back to Home
          </Link>

          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 500 }}>
              Flutter / Real-Time Communication
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '8px' }}>Telex</h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>Flutter Mobile App Developer — Emerj LLC</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '64px',
          }}>
            {[
              { label: 'Period', value: 'Dec 2025 – Present' },
              { label: 'Role', value: 'Flutter Developer' },
              { label: 'Company', value: 'Emerj LLC' },
              { label: 'Sector', value: 'Communication / SaaS' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              width: '100%',
              marginBottom: '64px',
              borderRadius: '18px',
              border: '1px solid var(--border)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
              padding: '18px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '16px',
              }}
              className="screenshot-grid"
            >
              {screenshots.map((src, index) => (
                <div
                  key={src}
                  style={{
                    borderRadius: '14px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    overflow: 'hidden',
                    minHeight: '220px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                  }}
                >
                  <img
                    src={src}
                    alt={`Telex app screenshot ${index + 1}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
              Play Store screenshots
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '60px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>Overview</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
                Telex is a real-time team communication platform built with Flutter and Dart at Emerj LLC. The platform is designed for high-throughput messaging with a focus on performance and user experience.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '40px' }}>
                The Chat UI is engineered to handle thousands of messages with smooth scrolling, lazy loading, and real-time updates — all while maintaining a clean, intuitive interface for teams.
              </p>

              <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>The Challenge</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '40px' }}>
                Building a high-performance chat UI that can handle thousands of messages without UI jank, while maintaining real-time synchronization and a seamless user experience across Android devices.
              </p>

              <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>My Contribution</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Working in an Agile cross-functional team, I built the Flutter mobile application — implementing the real-time Chat UI with lazy loading, smooth scroll optimization, and integration with the backend APIs. Collaborated with junior and senior developers through the HNG internship to ship the initial version.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Quick Info</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                Real-time team communication with high-performance Flutter Chat UI, built for scale.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=net.emerj.telex"
                target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  background: '#fff', color: '#000', fontSize: '14px', fontWeight: 500,
                  padding: '10px 18px', borderRadius: '8px', width: '100%', textAlign: 'center',
                }}
              >
                ▶ View on Play Store
              </a>
            </div>
          </div>
        </div>

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
          div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
          .screenshot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
