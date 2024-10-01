import React from 'react'

export default function Loading() {
    return (
        <div className="animate-pulse flex flex-wrap justify-evenly gap-10">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <div className=' w-[300px] h-[420px] rounded-xl shadow-2xl bg-gray-200'></div>
          ))}
        </div>
      );

}
