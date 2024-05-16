import React from 'react';

const Card = ({ image, name, profession, handelClick, friends, index }) => {
  return (
    <div className='w-60 bg-white rounded-md overflow-hidden'>
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className="text-sm">{profession}</h5>
        <button onClick={() => handelClick(index)} className={`px-3 py-1 text-xs text-white ${friends ? "bg-green-600 " : "bg-blue-600"} font-semibold rounded-md mt-4`}>
          {friends ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
