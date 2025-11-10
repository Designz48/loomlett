// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Loomlett – 3‑D Printing & Downloads
        <br />
        Designed & built by <a href="https://github.com/Designz48" className="underline hover:text-accent">designzbyoj</a>
      </div>
    </footer>
  );
}
