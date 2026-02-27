interface VideoPreviewProps {
  /** URL del video para preview en bucle. Si no se pasa, se muestra placeholder animado. */
  videoUrl?: string;
  /** Etiqueta para el placeholder (ej. "VIDEO", "MENÚ"). */
  label?: string;
  /** Clases adicionales. */
  className?: string;
}

export function VideoPreview({ videoUrl, label = 'Preview', className = '' }: VideoPreviewProps) {
  if (videoUrl) {
    return (
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[120px] h-[68px] rounded-lg border-2 border-amber-500 object-cover shadow-xl pointer-events-none z-20 ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[120px] h-[68px] rounded-lg border-2 border-amber-500/80 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 flex items-center justify-center text-amber-800 font-bold text-[10px] shadow-xl pointer-events-none z-20 animate-pulse ${className}`}
      aria-hidden
    >
      {label}
    </div>
  );
}
