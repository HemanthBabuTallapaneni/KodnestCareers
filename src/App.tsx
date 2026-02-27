import { useState } from 'react';
import './App.css';
import { TopBar } from './layout/TopBar';
import { ContextHeader } from './layout/ContextHeader';
import { MainLayout } from './layout/MainLayout';
import { ProofFooter } from './layout/ProofFooter';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { EmptyState } from './components/EmptyState';
import { ErrorState } from './components/ErrorState';

function App() {
  const [showError, setShowError] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const primaryWorkspace = (
    <>
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
        <Button variant="primary" onClick={() => { setShowError(false); setShowEmpty(false); }}>Show Standard</Button>
        <Button variant="secondary" onClick={() => { setShowError(true); setShowEmpty(false); }}>Show Error</Button>
        <Button variant="secondary" onClick={() => { setShowEmpty(true); setShowError(false); }}>Show Empty</Button>
      </div>

      {showError && (
        <ErrorState
          title="Failed to Load Notifications"
          message="We couldn't retrieve the latest job postings from the server."
          resolution="Check your internet connection and try refreshing the page."
        />
      )}

      {showEmpty && (
        <EmptyState
          title="No Notifications Yet"
          description="You haven't set up any job filters yet. Create your first filter to start receiving updates."
          actionLabel="Create Filter"
          onAction={() => alert('Action clicked')}
        />
      )}

      {!showError && !showEmpty && (
        <>
          <Card>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 var(--space-2) 0' }}>Job Filter Settings</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
              Define the criteria for the jobs you want to be notified about. We'll send you an email when a match is found.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Input label="Job Title Keywords" placeholder="e.g. Frontend Engineer, React" />
              <Input label="Location" placeholder="e.g. Remote, New York" />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
                <Button variant="primary">Save Settings</Button>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 var(--space-2) 0' }}>Recent Matches</h3>
            <div style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 500 }}>Senior Frontend Engineer at TechCorp</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Remote • $140k - $180k</div>
            </div>
            <div style={{ padding: 'var(--space-2) 0' }}>
              <div style={{ fontWeight: 500 }}>React Developer at StartupX</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>New York (Hybrid) • $120k - $150k</div>
            </div>
          </Card>
        </>
      )}
    </>
  );

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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 'var(--space-5)'
    }}>
      <TopBar currentStep={1} totalSteps={3} status="In Progress" />

      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--space-4)'
      }}>
        <ContextHeader
          headline="Configure Your Alerts"
          subtext="Set up precision targeting for your next role. We filter the noise so you only see high-signal opportunities."
        />

        <MainLayout
          primaryWorkspace={primaryWorkspace}
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
  );
}

export default App;
