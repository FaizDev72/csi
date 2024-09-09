import React from 'react';

const footerData = {
  about: {
    heading: "ACOE",
    description:
      "‘The Atharva Educational Trust’ believes in producing well discipline, practical oriented, highly knowledgeable Engineers to serve not only for themselves but for the society and nation. To make this dream come true, the Trust has developed the infrastructure first and proved their merit in getting recognition from Govt, of Maharashtra & A.I.C.T.E.",
  },
  contact: {
    heading: "Contact",
    details: [
      "atharvacoe.ac.in",
      "022 4029 4949",
    ],
  },
  address: {
    heading: "Address",
    details: [
      "Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop Naka, Malad West, Mumbai, Maharashtra 400095",
    ],
  },
  links: {
    heading: "Quick Links",
    items: [
      { name: "Home", href: "/" },
      { name: "Tech", href: "/tech" },
      { name: "About", href: "/about" },
      { name: "Bootcamp", href: "/bootcamp" },
    ],
  },
  social: {
    heading: "Follow Us",
    items: [
      { name: "Instagram", href: "https://www.instagram.com/csi_acoe?igsh=MXI0N3J2NGVqeXhwdg==", imgSrc: "./insta.png" },
      { name: "Facebook", href: "https://facebook.com", imgSrc: "./fb.png" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/computer-society-of-india-ace/", imgSrc: "./linkedin.png" },
    ],
  },
};

function Footer() {
  return (
    <footer className="relative md:h-[570px] bg-[#002567] text-gray-300 py-12 mt-12 p-12 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-12 md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{footerData.about.heading}</h3>
            <p>{footerData.about.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">{footerData.address.heading}</h3>
            {footerData.address.details.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <h3 className="text-lg font-bold text-white mt-6 mb-4">{footerData.contact.heading}</h3>
            {footerData.contact.details.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">{footerData.links.heading}</h3>
            <ul>
              {footerData.links.items.map((item) => (
                <li key={item.name} className="mb-2">
                  <a
                    href={item.href}
                    className="hover:text-white hover:underline transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">{footerData.social.heading}</h3>
            <ul className="flex flex-row gap-2">
              {footerData.social.items.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.name}
                >
                  <img 
                    src={item.imgSrc} 
                    alt={item.name} 
                    className="h-12 w-12" 
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="relative h-[17vw] mt-[4vw] overflow-hidden flex justify-center items-center">
          <span
            className="text-transparent text-[17vw] font-productsans opacity-10 font-bold uppercase tracking-wide text-stroke-3px"
            style={{
              position: 'relative',
              bottom: '-5.5vw', // Adjust as needed based on responsiveness
            }}
          >
            CSI - ACE
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
