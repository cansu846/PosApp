import React from 'react'

function StatisticCard({ img, title, amount }) {
  return (

    <div className="card-item bg-gray-800 p-8 rounded-lg w-full">
      <div className="flex gap-x-4">
        <div className="rounded-full bg-white w-16 h-16 p-3">
          <img src={img} alt="" />
        </div>
        <div className="text-white">
          <p className="mb-2 text-lg font-medium text-gray-400">{title}</p>
          <p className="text-xl font-semibold text-gray-200">{amount}</p>
        </div>
      </div>
    </div>

  )
}

export default StatisticCard
