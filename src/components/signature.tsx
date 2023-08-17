import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignaturePopupProps {
  onClose: () => void;
  onSave: (signature: string) => void;
}

const SignaturePopup: React.FC<SignaturePopupProps> = ({ onClose, onSave }) => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  const handleSave = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      onSave(dataURL);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md p-4 bg-white border border-gray-300 rounded-lg">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ className: 'w-full h-40 border border-gray-300' }}
        />
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignaturePopup;
