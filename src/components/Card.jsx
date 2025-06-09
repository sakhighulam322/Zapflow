import React from 'react';

export default function Card({
  title,
  primaryValue,
  primaryLabel,
  secondaryValue,
  secondaryLabel,
  icon: Icon,
  iconBg = 'bg-blue-100',
  iconColor = 'text-blue-600',
}) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-full">
      {/* Left - Icon */}
      <div className={`p-3 rounded-full ${iconBg} ${iconColor} text-xl`}>
        {Icon && <Icon />}
      </div>

      {/* Middle - Content */}
      <div className="flex-1 ml-4">
        <h4 className="text-sm font-medium text-gray-600">{title}</h4>
        <div className="flex gap-6 mt-1">
          <div className="text-md font-semibold text-gray-800">
            {primaryValue} <span className="text-xs text-gray-500">{primaryLabel}</span>
          </div>
          {secondaryValue !== undefined && (
            <div className="text-md font-semibold text-red-600">
              {secondaryValue} <span className="text-xs text-gray-500">{secondaryLabel}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
