import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HelloWorld } from './components/HelloWorld';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <HelloWorld />
      </main>
      <Footer />
    </div>
  );
}
