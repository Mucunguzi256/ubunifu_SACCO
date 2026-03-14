import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAF8' }}>
      <aside
        style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '280px', background: '#1B5E20', overflowY: 'auto', zIndex: 40 }}
        className="hidden md:block"
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      {sidebarOpen && (
        <div
          className="md:hidden"
          style={{ position: 'fixed', inset: 0, zIndex: 50 }}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={() => {}}
          role="presentation"
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
          <div
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '280px', background: '#1B5E20', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
            role="presentation"
          >
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} className="md:ml-[280px]">
        <div className="md:hidden flex items-center gap-3 px-4" style={{ height: '56px', background: '#1B5E20', position: 'sticky', top: 0, zIndex: 30 }}>
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
          </button>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white' }}>UBUNIFU SACCO</span>
        </div>

        <main style={{ flex: 1 }}>{children}</main>

        <footer style={{ background: '#1B5E20', color: 'white', textAlign: 'center', padding: '40px 24px' }}>
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>UBUNIFU SACCO Ltd.</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '16px' }}>info@ubunifusacco.org | +256 781 940358 | ubunifusacco.co.ug</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            {[
              { href: 'https://twitter.com/ubunifusacco', icon: <FaTwitter size={16} />, label: 'Twitter' },
              { href: 'https://linkedin.com/company/ubunifusacco', icon: <FaLinkedinIn size={16} />, label: 'LinkedIn' },
              { href: 'https://facebook.com/ubunifusacco', icon: <FaFacebook size={16} />, label: 'Facebook' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none' }}>
                {icon}
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>&copy; 2025 UBUNIFU SACCO Ltd. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
