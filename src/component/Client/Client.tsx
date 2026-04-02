const clientLogos = [
  { name: "Himalayan Java", src: "" },
  { name: "Yeti Airlines", src: "" },
  { name: "Ncell", src: "" },
  { name: "Goldstar Beer", src: "" },
  { name: "Dabur Nepal", src: "" },
  { name: "CG Electronics", src: "" },
  { name: "Shangrila Foods", src: "" },
  { name: "Wai Wai", src: "" },
  { name: "Kumari Bank", src: "" },
  { name: "NIC Asia Bank", src: "" },
  { name: "Soaltee Hotel", src: "" },
  { name: "Nepal Airlines", src: "" },
];

const OurClients = () => {
  return (
    <div className="relative py-16 px-4 scroll-mt-50 " id="Client">
      {/* Heading */}
      <div className="text-center flex flex-col items-center mb-12 max-w-121.25 mx-auto">
        <h1 className="text-text-secondary text-4xl font-bold">Our Clients</h1>
      </div>

      <div className="flex flex-col gap-8">
        {/* Scroll Track */}
        <div className="clients-scroll-container">
          <div className="clients-scroll-track">
            {/* First set */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className="clients-logo-card">
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="clients-logo-placeholder">
                    {client.name}
                  </span>
                )}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className="clients-logo-card">
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="clients-logo-placeholder">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Track */}
        <div className="clients-scroll-container">
          <div className="clients-scroll-track-reverse">
            {/* First set */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className="clients-logo-card">
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="clients-logo-placeholder">
                    {client.name}
                  </span>
                )}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className="clients-logo-card">
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="clients-logo-placeholder">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default OurClients;
