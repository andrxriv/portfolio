import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Image = () => {
  const { windows } = useWindowStore();
  const imgData = windows.imgfile?.data;

  if (!imgData) {
    return null;
  }

  const { name, imageUrl } = imgData;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || 'Image File'}</h2>
      </div>
      
      <div className="window-content p-6 overflow-auto flex items-center justify-center">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
