import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-page px-3 py-4 sm:px-5 sm:py-6 xl:px-8">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[1.2rem] border border-border bg-shell shadow-shell">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
