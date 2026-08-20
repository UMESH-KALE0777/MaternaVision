export default function ConfidenceBar({ value = 0, label = 'Confidence' }) {
  const confidence = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-blue-700">
          {confidence.toFixed(0)}%
        </span>
      </div>

      <div
        className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={confidence}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={label}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-500"
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>
  );
}