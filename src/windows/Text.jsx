import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const txtData = windows.txtfile?.data;

  if (!txtData) {
    return null;
  }

  const { name, image, subtitle, description } = txtData;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || 'Text File'}</h2>
      </div>
      
      <div className="window-content p-6 overflow-auto bg-white">
        {image && (
          <div className="mb-6">
            <img 
              src={image} 
              alt={name} 
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        )}
        
        {subtitle && (
          <h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
        )}
        
        {description && Array.isArray(description) && (
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
