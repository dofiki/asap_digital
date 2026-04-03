import { useState } from "react";

const Services = () => {
  const services = [
    {
      title: "Content Creation",
      description:
        "Development of original visual and written assets tailored for brand communication and audience engagement.",
      src: "/assets/creation.svg",
    },
    {
      title: "Content Branding",
      description:
        "Structuring and aligning content with brand identity, tone, and positioning across all platforms.",
      src: "/assets/branding.svg",
    },

    {
      title: "Web Design & Dev Services",
      description:
        "Design and development of responsive, user-centric websites optimized for performance and usability.",
      src: "/assets/web.svg",
    },
    {
      title: "Production of Content",
      description:
        "Execution and delivery of high-quality multimedia content including video, graphics, and digital assets.",
      src: "/assets/production.svg",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic promotion using digital channels such as search, display, and paid advertising to drive growth.",
      src: "assets/digital.svg",
    },
    {
      title: "Social Media Marketing",
      description:
        "Planning and managing social media campaigns to increase reach, engagement, and brand awareness.",
      src: "/assets/social.svg",
    },
    {
      title: "Print Designing",
      description:
        "Creation of print-ready designs for marketing materials such as brochures, flyers, and business collateral.",
      src: "/assets/printing.svg",
    },
    {
      title: "Campaign Planning",
      description:
        "End-to-end planning of marketing campaigns including strategy, execution roadmap, and performance goals.",
      src: "/assets/campaign.svg",
    },
    {
      title: "Analytics with Strategy",
      description:
        "Data-driven analysis combined with strategic insights to optimize marketing performance and decision-making.",
      src: "/assets/analytics.svg",
    },
  ];

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div
      className="bg-[#BAD7DF] min-h-screen p-5 flex flex-col items-center
       justify-center gap-10 md:p-15 relative scroll-mt-30 cursor-none"
      id="Services"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* fixed — taken out of the document flow, always positioned relative to
      the browser window (viewport). Scrolling doesn't affect it.*/}
      {visible && (
        <div
          className="h-10 w-10 rounded-full bg-primary hidden md:block fixed 
          pointer-events-none mix-blend-hard-light"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <h1 className="text-text-secondary text-4xl font-bold">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-5 md:p-10 rounded-xl hover:bg-primary
            hover:text-text-primary transition-all delay-75 ease-in cursor-none
            outline outline-gray-500 flex flex-col items-center justify-center"
          >
            <div className="w-30 md:w-50 md:h-50">
              <img src={service.src} alt={service.title} className="max-w-50" />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="font-bold text-2xl">{service.title}</div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
