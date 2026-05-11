import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-page px-2 py-4 sm:px-4 sm:py-6 xl:px-5">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col overflow-hidden rounded-[1.2rem] border border-border bg-shell shadow-shell">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
