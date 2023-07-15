import styled from "styled-components";

interface FlexProps {
  direction?: string;
  justifyContent?: any;
  left?: number;
  flex?: number | string;
  top?: number
  right?: number,
  bottom?: number,
  alignItems?: any,
  gap?:number
}

interface AbsoluteProps {
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string

}

export const Absolute = styled.div`
position:absolute;
top:${(props: AbsoluteProps) => props.top};
left:${(props: AbsoluteProps) => props.left};
right:${(props: AbsoluteProps) => props.right};
bottom:${(props: AbsoluteProps) => props.bottom};

`
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction || "row"};
  justify-content: ${(props: FlexProps) => props.justifyContent};
   margin-left: ${(props: FlexProps) => props.left || 0}px;
  margin-top: ${(props: FlexProps) => props.top || 0}px;
  margin-right: ${(props: FlexProps) => props.right || 0}px;
  margin-bottom: ${(props: FlexProps) => props.bottom || 0}px;
 align-items: ${(props: FlexProps) => props.alignItems};
  flex: ${(props: FlexProps) => props.flex ? props.flex : 'none'};
  gap:${(props: FlexProps) => props.gap || 0}px;;
`;

export const Block = styled.div`
  display: block;
  text-align: start;
`;
