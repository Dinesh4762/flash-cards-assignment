import React from 'react'

const InputDiv = ({label,value,onchange, placeholder}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="">{label}</span>
      <input
        type="text"
        value={value}
        className="px-3 py-2 outline-none rounded-lg"
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
}

export default InputDiv
