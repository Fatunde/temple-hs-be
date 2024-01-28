import React, { ReactNode, FC, InputHTMLAttributes } from "react";
import Select from "react-select";

export interface ISelect {
  label: string;
  value: string;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  data: Array<ISelect>;
  handleChange?: () => void;
  label: string;
}

const CustomSelect = ({ data, handleChange, label, ...rest }: InputProps) => {
  return (
    <div className='display-flex flex-col text-left'>
      <label className='text-sm font-medium mb-4'>{label}</label>
      <Select onChange={handleChange} options={data} />
    </div>
  );
};

export default CustomSelect;
