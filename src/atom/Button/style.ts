import styled from "styled-components";
import { Button } from "antd";

export const PrimaryBtn = styled(Button)`
  padding: 16px 40px;
  font-size: 24px;
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  
`;


export const DangerBtn = styled(Button)`
  background-color: transparent;
  border-color: #F5222D;
  border-radius: 8px !important;
  color: #F5222D;
`;

export const SecondaryBtn = styled(Button)`
  background-color: var(--color-system-gray-gray-1);
  border-color: var(--color-system-purple-purple-6);
  border-radius: 8px !important;
  color: var(--color-system-purple-purple-6);
`;

export const TertiaryBtn = styled(Button)`
  background-color: var(--color-system-purple-purple-1);
  border: none;
  border-radius: 8px !important;
  color: var(--color-system-purple-purple-6);
`;

export const GhostBtn = styled(Button)`
  background-color: transparent;
  border: none;
  border-radius: 8px !important;
  color: var(--color-system-purple-purple-7);
`;
