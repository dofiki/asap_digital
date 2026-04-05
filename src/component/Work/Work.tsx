const works = [
  {
    title: "Brand Campaign",
    category: "Branding",
    year: "2024",
    img: "https://placehold.co/600x400",
  },
  {
    title: "E-Commerce Website",
    category: "Web Design",
    year: "2024",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Social Media Strategy",
    category: "Digital Marketing",
    year: "2023",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Product Shoot",
    category: "Content Production",
    year: "2023",
    img: "https://placehold.co/600x400",
  },
  {
    title: "SEO Overhaul",
    category: "Analytics",
    year: "2024",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Print Campaign",
    category: "Print Design",
    year: "2023",
    img: "https://placehold.co/600x400",
  },
];

const Work = () => {
  return (
    <div
      className="bg-white text-text-secondary min-h-screen scroll-mt-30 flex flex-col items-center gap-10 p-5 md:p-15"
      id="Works"
    >
      <h1 className="text-primary text-4xl font-bold">Our Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-6xl">
        {works.map((work, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden outline outline-gray-200 hover:outline-gray-400 transition-all cursor-pointer group"
          >
            <div className="overflow-hidden">
              <img
                src={work.img}
                alt={work.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  {work.category}
                </span>
                <span className="text-xs text-gray-400">{work.year}</span>
              </div>
              <h2 className="font-bold text-xl">{work.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
