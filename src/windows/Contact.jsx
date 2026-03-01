import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"


const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>


      <div className="p-5 space-y-5">
        <div className="flex items-center gap-5">
          <img
            src="../../public/images/shadman.jpeg"
            alt="shadman"
            className="w-20 rounded-full"
          />
          <img
            src="../../public/images/Bappy.png"
            alt="Bappy"
            className="w-20 rounded-full"
          />
        </div>

        <h3>Get in Touch with Our Team</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>
        <p>hnaimul302@gmail.com</p>
        <p>shadmanshoumik25@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


const ContactWindow = WindowWrapper(Contact , 'contact');

export default ContactWindow;