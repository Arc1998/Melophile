import React from "react";
import { ErrorContainer, FormInput } from "./style";
import Error from "../Error";
import { Flex } from "../Flex/style";

interface InputFieldProps {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  error?: any;
  style?: any;
}

export const Input = (props: InputFieldProps): JSX.Element => {
  const {
    type,
    id,
    name,
    value,
    className,
    style,
    placeholder,
    onChange,
    error,
  } = props;
  return (
    <>
        <FormInput
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          style={style}
          className={`${className} ${error ? "errorClass" : ""}`}
          value={value}
          onChange={(e :any) => {
            if (onChange) {
              const currentValue = e.target.value;
              onChange(e, currentValue);
            }
          }}
        />
        <span className="errormsg" style={{ display: "flex" }} id={name}>
          <ErrorContainer>
          <Flex flex={1}>{error ? <Error error={error} /> : ""}</Flex>
          </ErrorContainer>
        </span>
 </>     
    
  );
};
