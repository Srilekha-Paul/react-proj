import { useEffect } from 'react'
import { X } from 'lucide-react'

const Modal = ({ 
  isOpen, 
  onClose, 
  title = "Quick View", 
  children, 
  size = "md",
  className = "" 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`glass-effect bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl transform scale-95 animate-fadeInUp transition-all duration-300 max-h-[90vh] overflow-y-auto ${sizeClasses[size]} w-full mx-4 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/50 backdrop-blur-md border-b border-white/50 rounded-t-3xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-2xl transition-colors duration-200 hover:rotate-90"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 pb-12">
          {children}
        </div>

        {/* Footer (Optional) */}
        <div className="sticky bottom-0 z-10 bg-white/50 backdrop-blur-md border-t border-white/50 rounded-b-3xl p-6 pt-0">
          <div className="flex gap-4 justify-end">
            <button 
              onClick={onClose}
              className="px-8 py-3 text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-200"
            >
              Close
            </button>
            <button className="btn-primary px-8 py-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;