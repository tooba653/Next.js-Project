"use client";

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { id } = useParams() as { id: string }; 

  return (
    <section className="py-20 px-4">
      <h2 className="text-2xl font-bold mb-4">Blog Post {id}</h2>
      <p>This is a dynamically generated blog post page for post ID: {id || 'Loading...'}</p>
    </section>
  );
}
