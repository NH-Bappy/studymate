import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";


const Navbar = () => {

  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div className="">
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">macOS</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* right side of navbar */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        {/* time */}
        <time>{dayjs().format("ddd D MMM hh:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar