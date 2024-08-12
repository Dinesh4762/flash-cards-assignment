import React from 'react'

const NavigateButton = ({children , onclick}) => {
  return (
    <button onClick={onclick} className={`w-[36px] h-[36px] rounded-full bg-gray-600 grid place-content-center hover:border-2`}>
      {children}
    </button>
  )
}

export default NavigateButton;
