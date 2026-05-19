export default function Hero() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Varshini</h1>
      <h2 className="text-xl text-gray-600">
        Data Analyst & ML Engineer
      </h2>
      <p className="text-gray-500">
        I build data-driven solutions that turn analytics into business impact.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <a href="/resume.pdf" className="px-4 py-2 border rounded">
          View Resume
        </a>
        <a href="#projects" className="px-4 py-2 bg-black text-white rounded">
          View Projects
        </a>
      </div>
    </section>
  );
}