import React from 'react'

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange,
    label
}) => {
  return (
    <div className='w-full'>
        {label && <p className='text-xl text-white font-semibold mb-2'>{label}</p>}
        <input type={type} 
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
        />
    </div>
  )
}

export default Input