import React from 'react'

const Button = ({ title, id, leftIcon, rightIcon, containerClassName }) => {

  return (
    <button id={id} className={`group relativez z-10 cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClassName}`}>
      {leftIcon}

      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
    </button>
  )
}

export default Button