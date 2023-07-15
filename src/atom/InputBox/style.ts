import styled from "styled-components";
import { Input } from "antd";
import "../Color/color.css"

export const FormInput = styled(Input)`
  font-size: 14px;
  font-family: Copyright Klim Type Foundry soehne buch;
  border: 1px solid var(--color-system-gray-gray-21);
  background: transparent;
  border-radius: 8px;
  color: var(--color-system-gray-gray-17);
  font-family: Copyright Klim Type Foundry soehne kraftig;
  line-height: 22px;
  padding:11px 12px;
  margin: 4px 0;

`;

export const ErrorContainer = styled.span`
  display: flex;
  margin-bottom: 10px; /* Add margin-bottom for distance between error and next field/button */
`;

