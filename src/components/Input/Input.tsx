import React from "react";
import "./Input.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <Input
    className="input"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
