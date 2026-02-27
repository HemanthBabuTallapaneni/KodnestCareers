import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Navigation } from './layout/Navigation';
import { MainLayout } from './layout/MainLayout';
import { ProofFooter } from './layout/ProofFooter';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Saved } from './pages/Saved';
import { Digest } from './pages/Digest';
import { Settings } from './pages/Settings';
import { Proof } from './pages/Proof';
import { NotFound } from './pages/NotFound';
import { Button } from './components/Button';

function App() {
  const secondaryPanel = (
    <>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: 0 }}>How this works</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0, lineHeight: 'var(--line-height)' }}>
        Our engine continually scans top job boards. When a role matches your precise criteria, you receive an alert instantly.
      </p>

      <div style={{
        backgroundColor: 'var(--bg)',
        padding: 'var(--space-2)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border-color)',
        marginTop: 'var(--space-2)'
      }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-1)', textTransform: 'uppercase' }}>
          Current Plan
        </div>
        <div style={{ fontWeight: 500 }}>Pro Tier</div>
        <div style={{ fontSize: '14px', color: 'var(--success)' }}>Active</div>
      </div>

      <Button variant="secondary" style={{ width: '100%', marginTop: 'auto' }}>
        View History
      </Button>
    </>
  );

  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 'var(--space-5)'
      }}>
        <Navigation />

        <main style={{
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-4)'
        }}>
          <MainLayout
            primaryWorkspace={
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/digest" element={<Digest />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/proof" element={<Proof />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            }
            secondaryPanel={secondaryPanel}
          />

          <ProofFooter
            uiBuilt={true}
            logicWorking={false}
            testPassed={false}
            deployed={false}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
