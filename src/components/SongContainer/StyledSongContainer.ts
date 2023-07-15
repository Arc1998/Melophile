import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";

export const StyledSongContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const StyledTrackInfo = styled.div`
  flex-grow: 1;
`;

export const StyledTrackName = styled.p`
  font-weight: bold;
`;

export const StyledArtistName = styled.p`
  color: #888;
`;

export const StyledHeartIcon = styled(HeartOutlined)`
  font-size: 18px;
  color: #333;
  margin-left: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4081;
  }
`;

export const StyledMusicEmoji = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;
