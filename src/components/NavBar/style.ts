import styled, { keyframes } from "styled-components";

const rhythmicAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.9);
  }
`;

export const CustomHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #e0f8e8;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 14px 20px;
  }

  span.welcome-text {
    animation: ${rhythmicAnimation} 2s infinite;
    font-size: 24px;
  }
`;
