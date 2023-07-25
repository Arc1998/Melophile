import styled from "styled-components";
import melophileimage from "../../assets/images/loogo2.png";

export const CustomHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #e0f8e8;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  padding: 0 20px; 

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 14px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url(${melophileimage});
  background-size: cover;
  background-position: center;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin-left: 80px;
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 54px
`;
