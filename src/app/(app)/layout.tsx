import { Header, Sidebar } from '@/components/layout';
import { MainContent, AppContainer } from './app.style';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppContainer>
      <Header css={{ gridColumn: '1 / 3', gridRow: '1' }} />

      <Sidebar css={{ gridColumn: '1', gridRow: '2 / 3' }} />

      <MainContent css={{ gridColumn: '2', gridRow: '2' }}>
        {children}
      </MainContent>
    </AppContainer>
  );
}
