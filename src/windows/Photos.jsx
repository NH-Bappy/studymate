import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

const Photos = () => {
  const { openWindow } = useWindowStore();

  // helper to open any image in ImageWindow
  const openImage = (image) => {
    // use unique id so multiple images can open at once
    openWindow(
      "imgfile", // target window type
      {
        id: image.id,
        name: image.name || "Gallery image",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        imageUrl: image.img || image.imageUrl, // support gallery and About images
      },
      image.id, // uniqueId to allow multiple images at once
    );
  };

  return (
    <>
      {/* Window Header */}
      <div
        id="window-header"
        className="flex justify-between items-center px-3 py-2 bg-gray-100"
      >
        <WindowControls target="photos" />

        <div className="flex items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="sidebar w-1/4 p-3 border-r border-gray-200">
          <h2 className="text-lg font-semibold mb-3">Photo</h2>
          <ul className="space-y-2">
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
              >
                <img src={icon} alt={title} className="w-5 h-5" />
                <p className="text-sm font-medium truncate">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="gallery w-3/4 p-3 overflow-auto">
          <ul className="grid grid-cols-3 gap-3">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openImage({ id, img })}
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="w-full h-40 object-cover rounded-lg shadow-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// Wrap with your Window HOC
const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
