import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const socialLinks = [
  {
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61560351551973",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    url: "https://www.instagram.com/asap_digitalbyeasysewa/",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/asap-digital-by-easysewa-pvt-ltd/",
  },
];

const Footer = () => {
  const handleMailto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:asap.marketing06@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      className="relative w-full overflow-hidden text-white bg-primary"
      id="Footer"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* COL 1 */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-1 text-[#a89df5]">
                Digital Agency
              </p>

              <h2 className="text-4xl font-black tracking-tight leading-none">
                ASAP Digital<span className="text-[#a89df5]">.</span>
              </h2>

              <p className="text-xs mt-1 tracking-widest uppercase text-white/35">
                by EasySewa
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/55">
              We craft digital experiences that move brands forward — from
              strategy to screen.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2 mt-1">
              {socialLinks.map(({ icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-8 h-8 flex items-center justify-center rounded-full
                    border border-[rgba(168,157,245,0.25)]
                    bg-[rgba(255,255,255,0.04)]
                    text-white/50
                    transition-all duration-200
                    hover:scale-110
                    hover:bg-[rgba(168,157,245,0.2)]
                    hover:border-[#a89df5]
                    hover:text-white
                  "
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-1.5 mt-1">
              {[
                "Branding",
                "UI/UX",
                "Web Design",
                "Motion",
                "Analytics",
                "Social Media",
              ].map((s) => (
                <span
                  key={s}
                  className="
                    text-[10px] px-2 py-1 rounded-full
                    border border-[rgba(168,157,245,0.2)]
                    text-white/40
                    bg-[rgba(255,255,255,0.03)]
                  "
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#a89df5]">
              Get in Touch
            </h3>

            <a
              href="tel:+9779843777976"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(168,157,245,0.12)] text-[#a89df5]">
                <MdPhone size={14} />
              </span>
              +977 9843777976
            </a>
            <a
              href="tel:+9779861196153"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(168,157,245,0.12)] text-[#a89df5]">
                <MdPhone size={14} />
              </span>
              +977 9861196153
            </a>

            <a
              href="mailto:asap.marketing06@gmail.com"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(168,157,245,0.12)] text-[#a89df5]">
                <MdOutlineEmail size={14} />
              </span>
              asap.marketing06@gmail.com
            </a>
          </div>

          {/* COL 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#a89df5]">
              Send a Message
            </h3>

            <form onSubmit={handleMailto} className="flex flex-col gap-3">
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="
                  w-full px-4 py-2.5 rounded-lg text-sm
                  bg-[rgba(255,255,255,0.06)]
                  border border-[rgba(168,157,245,0.2)]
                  text-white
                  focus:outline-none
                  focus:border-[#a89df5]
                  transition-all
                "
              />

              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="
                  w-full px-4 py-2.5 rounded-lg text-sm
                  bg-[rgba(255,255,255,0.06)]
                  border border-[rgba(168,157,245,0.2)]
                  text-white
                  focus:outline-none
                  focus:border-[#a89df5]
                  transition-all
                "
              />

              <textarea
                name="message"
                required
                rows={3}
                placeholder="How can we help you?"
                className="
                  w-full px-4 py-2.5 rounded-lg text-sm resize-none
                  bg-[rgba(255,255,255,0.06)]
                  border border-[rgba(168,157,245,0.2)]
                  text-white
                  focus:outline-none
                  focus:border-[#a89df5]
                  transition-all
                "
              />

              <button
                type="submit"
                className="
                  flex items-center justify-center gap-2
                  w-full py-2.5 rounded-lg text-sm font-semibold
                  bg-[#2e2970] text-white
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  hover:outline-1 hover:outline-white
                  transition-all duration-75
                  cursor-pointer
                "
              >
                <IoSend size={14} />
                Send via Email
              </button>

              <p className="text-[10px] text-center text-white/25">
                Opens your email client automatically
              </p>
            </form>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px mb-6 bg-[rgba(168,157,245,0.15)]" />

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <p>© 2026 ASAP Digital by EasySewa. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[rgba(168,157,245,0.5)]">
            ASAP DIGITAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
