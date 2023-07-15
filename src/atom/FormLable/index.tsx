import React from "react";
import styled from "styled-components";

export const LabelText = styled.label`
font-size: 14px;
font-family: Copyright Klim Type Foundry soehne halbfett;
font-stretch: normal;
font-style: normal;
line-height: 1.57;
letter-spacing: normal;
text-align: left;
color: var(--color-system-gray-gray-10);
display:block;
&.bottom13{
  margin-bottom:13px;
}
&.gray-9{
  color:#17082D;
}
`;

interface FormLabelProps {
  text: string | React.ReactNode;
  ismandatory?: boolean;
  className?:any;
}

export const Label = (props: FormLabelProps): JSX.Element => {
  const { text , ismandatory,className} = props;
  return (
  <LabelText className={className}>
      {text} 
      {ismandatory?<span style={{color:"red"}}>*</span>:null}
  </LabelText>
  );
};
