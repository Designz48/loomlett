// src/pages/Downloads.jsx
import { downloads } from "../data/downloads";
import PageWrapper from "../components/PageWrapper"

export default function Downloads() {
  return (
    <PageWrapper>
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Download Shop</h1>
      <ul className="space-y-4">
        {downloads.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <span className="font-medium">{item.title}</span>
            <a
              href={item.file}
              download
              className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/80 transition-colors"
            >
              Get (${item.price.toFixed(2)})
            </a>
          </li>
        ))}
      </ul>
    </section>
    </PageWrapper>
  );
}
