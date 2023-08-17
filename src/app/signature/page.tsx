'use client'
import { useState } from 'react';
import SignaturePopup from '@/components/signature';
import Link from 'next/link';

const Client_signature = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [signatureImg, setSignatureImg] = useState<string | null>(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveSignature = (signature: string) => {
    setSignatureImg(signature);

  };

  const handleDownloadSignature = () => {
    if (signatureImg) {
      const link = document.createElement('a');
      link.href = signatureImg;
      link.download = 'signature.png';
      link.click();
    }
  };

  return (
    <div className="flex justify-between items-center py-2 ">
      {
        signatureImg ? ("") : (
          <div>
            <h1 className="text-xl font-semibold mb-4">Digital Signature </h1>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleOpenPopup}
            >
              Open Signature
            </button>
          </div>
        )

      }
      <div>
        {isPopupOpen && (
          <SignaturePopup
            onClose={handleClosePopup}
            onSave={handleSaveSignature}
          />
        )}
        {signatureImg && (
          <div className="mt-4 flex justify-end">
            <div className=''>
            <img src={signatureImg} alt="Signature" className=" mx-auto max-h-40 border border-gray-300" />
            {/* <button
              className="mt-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleDownloadSignature}
            >
              <Link href={"/invoice_form"}></Link>
              Download Signature
            </button> */}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Client_signature;
