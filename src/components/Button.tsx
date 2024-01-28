import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
  isError?: boolean;
  small?: boolean;
  isLoading?: boolean;
}

const Button = ({
  light,
  isError,
  small,
  children,
  isLoading,
  ...rest
}: CustomButtonProps) => {
  return (
    <button
      {...rest}
      className='bg-primary text-white h-10 min-w-20 rounded-3xl border-primary p-2.5 text-xs'
    >
      {isLoading ? (
        <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'></svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
