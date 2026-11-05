import React from 'react';
import { X } from '@phosphor-icons/react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitle: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageTitle,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141518]/95 backdrop-blur-xs animate-fade-in cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] bg-transparent flex flex-col items-center cursor-default"
      >
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute -top-12 right-0 sm:-right-4 text-[#a1a1aa] hover:text-white p-2 rounded-xs bg-[#141518] border border-[#23252a] transition-colors cursor-pointer"
        >
          <X size={20} weight="bold" />
        </button>

        <img
          src={imageSrc}
          alt={imageTitle}
          className="max-w-full max-h-[80vh] object-contain rounded-xs shadow-2xl border border-[#23252a]"
        />

        {imageTitle && (
          <div className="mt-3.5 text-center text-white text-xs font-mono font-bold uppercase tracking-wider bg-[#141518] px-4 py-2 rounded-xs border border-[#23252a] shadow-md max-w-xl truncate">
            {imageTitle}
          </div>
        )}
      </div>
    </div>
  );
};
