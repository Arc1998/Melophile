import styled ,{keyframes} from "styled-components";

export const SongsContainerWrapper = styled.div`
  .songs-container {
    margin-left: 390px;
    margin-top: 97px;
    padding: 20px;
    
  }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  font-size: 22px;
  color: #ff5b5b;
  margin-top: 20px;
  animation: ${bounceAnimation} 1s infinite;
`;
