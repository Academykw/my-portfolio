import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 40px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
          }}>
            Aliu Usman
          </Link>

          {/* Desktop Nav */}
          <div className="desk-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}>
            {['#about', '#work', '#contact'].map((href, i) => {
              const label = href.replace('#', '')
              return (
                <a key={href} href={href} style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  fontWeight: 400,
                  textTransform: 'capitalize',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >{label.charAt(0).toUpperCase() + label.slice(1)}</a>
              )
            })}
            <a
              href="https://www.linkedin.com/in/aliu-kamalideen-usman-773982170"
              target="_blank" rel="noreferrer"
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >LinkedIn</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mob-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px',
            }}
          >
            {menuOpen ? '✕' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0, right: 0,
          zIndex: 999,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 20px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Work', href: '#work' },
            { label: 'Contact', href: '#contact' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aliu-kamalideen-usman-773982170' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                fontWeight: 400,
              }}
            >{item.label}</a>
          ))}
        </div>
      )}
    </>
  )
}
