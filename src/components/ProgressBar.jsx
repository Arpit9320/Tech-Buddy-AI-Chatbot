import React from 'react'

const ProgressBar = ({ progress, status }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 lg:w-[30%] w-[80%] bg-[#1b1b1b] border border-[#333] rounded-xl p-5 shadow-xl text-white z-50">

      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          Preparing AI Model
        </h2>

        <span className="text-sm text-gray-400">
          {(progress * 100).toFixed(0)}%
        </span>
      </div>

      <p className="text-sm text-gray-400 mb-4">
        {status}
      </p>

      <div className="w-full h-3 bg-[#2d2d2d] rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 transition-all duration-300"
          style={{
            width: `${progress * 100}%`,
          }}
        />
      </div>

      <p className="mt-4 text-xs text-gray-500">
        The model is downloaded only once and will be loaded from cache on future visits.
      </p>

    </div>
  )
}

export default ProgressBar
