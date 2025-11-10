// src/pages/About.jsx
import PageWrapper from "../components/PageWrapper"

export default function About() {
  return (
    <PageWrapper>
    <section className="container mx-auto py-12 px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6 text-primary">About designzbyoj</h1>
      <p className="text-lg leading-relaxed">
        Hey! I’m <strong>designzbyoj</strong>, the creator behind Loomlett.
        I’m passionate about turning digital ideas into tangible 3‑D prints.
        Every model you see here started as a sketch in my notebook,
        then a CAD file, and finally a physical object printed on my
        trusty desktop printer.
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        When I’m not tweaking slicer settings, I love sharing STL packs,
        textures, and little design tricks with the maker community.
        Feel free to explore the shop, grab a download, or reach out
        if you have a custom request!
      </p>
    </section>
    </PageWrapper>
  );
}
