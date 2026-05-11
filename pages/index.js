import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-page px-3 py-4 sm:px-4 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-sm border border-border bg-shell shadow-shell">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
