export default function About() {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We are a team dedicated to building amazing web experiences using Next.js! Our mission is to create performant,
          scalable, and user-friendly applications that exceed expectations.
        </p>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Innovation: Always pushing boundaries with technology.</li>
            <li>Collaboration: Working together for better solutions.</li>
            <li>Integrity: Delivering quality with honesty and transparency.</li>
          </ul>
        </div>
      </section>
    );
  }
  