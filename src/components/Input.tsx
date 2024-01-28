import React, { ReactNode, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  errorText?: string | undefined | null;
  box?: boolean;
  leftEl?: ReactNode;
  rightEl?: ReactNode;
  topRightEl?: ReactNode;
  password?: boolean;
  label?: string;
  type?: string;
  placeHolder?: string;
}

const Input = ({
  id,
  errorText,
  box,
  leftEl,
  rightEl,
  topRightEl,
  label,
  password,
  type,
  placeHolder,
  ...rest
}: InputProps) => {
  return (
    <div className='display-flex flex-col text-left'>
      <label className='text-sm font-medium'>{label}</label>
      <input
        {...rest}
        id={id}
        type={type}
        placeholder={placeHolder}
        className='border-neutral border w-full mt-1 h-10 rounded-md p-2.5 placeholder:text-xs focus:text-xs text-xs'
      />
    </div>
  );
};

export default Input;
