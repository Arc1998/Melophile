import styled from "styled-components";
import { PlayCircleOutlined, PauseCircleOutlined,StepBackwardOutlined,StepForwardOutlined} from "@ant-design/icons";

export const StyledSongPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
  

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 10px;
    border: 2px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #333;
    transition: color 0.3s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  audio {
    display: none;
  }
`;

export const StyledPlayIcon = styled(PlayCircleOutlined)`
  font-size: 36px;
  color: #ff4081;
  
`;

export const StyledPauseIcon = styled(PauseCircleOutlined)`
  font-size: 36px;
  color: #ff4081;
`;

export const StyledPreviousIcon = styled(StepBackwardOutlined)`
  font-size: 36px;
  color: #ff4081;

  &.disabled {
    /* Add your styles for the disabled icon here */
    color: #ccc; /* For example, change the color to grey */
    pointer-events: none; /* Disable click events */
  }
`;

export const StyledNextIcon = styled(StepForwardOutlined)`
  font-size: 36px;
  color: #ff4081;
`;