import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function ImageViewer() {
  const { windows } = useWindowStore();

  const data = windows?.imgfile?.data;
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="h-full flex flex-col">
      {/* Window Header */}
      <div id="window-header" className="flex items-center gap-3">
        <WindowControls target="imgfile" />
        <h2 className="text-lg font-semibold truncate">{name}</h2>
      </div>

      {/* Image Content */}
      <div className="flex-1 p-5 bg-white flex items-center justify-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-sm"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

const ImageWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageWindow;
