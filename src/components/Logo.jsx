function InkFrameLogo({ size = "text-3xl", color = "text-gray-800" }) {
  return (
    <div className="inline-flex items-center gap-2">
      {/* Icon */}
      <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-sm relative">
        <div className="absolute top-0 right-0 w-2 h-2 bg-gray-800 rotate-45 origin-top-right"></div>
        <div className="absolute top-1 left-1 h-1 w-4 bg-gray-800"></div>
        <div className="absolute top-2 left-1 h-1 w-3 bg-gray-800"></div>
        <div className="absolute top-3 left-1 h-1 w-2 bg-gray-800"></div>
      </div>

      {/* Text */}
      <span className={`${size} ${color} font-bold tracking-tight`}>
        Ink<span className="text-teal-600">Frame</span>
      </span>
    </div>
  );
}

export default InkFrameLogo;
