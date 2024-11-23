// src/app/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My Next.js Project</h1>
        <p className="mt-4 text-lg">This website was built as part of the Next.js Learning Course.</p>
      </section>
      <Footer />
    </>
  );
}
