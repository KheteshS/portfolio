import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col sm:flex-row sm:justify-between">
        {/* <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/"> Visit my blog</a>
        </div> */}

        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img
                className="w-5"
                src={img.imgPath}
                alt={img.name}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️ {new Date().getFullYear()} Khetesh Singh | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
