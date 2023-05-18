import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'>
            {LabelName}
          </label>
          {isSupriseMe && (
            <button type='button' onClick={handleSupriseMe} className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'>
              Suprise Me
            </button>

          )}
      </div>
      <input 
        type={type} 
        id={name} 
        name = {name} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange} 
        required 
        className='bg-grey-50 border border-grey-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none 
                  block w-full p-3'>
                
       </input>
    </div>
  )
}

export default FormField