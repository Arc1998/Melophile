import React from 'react'
import { ScaleLoader } from 'react-spinners'
import { LoaderContainer } from './style'

interface LoaderFieldProps {
  height? : number;
  width?: number;
  className?: string ;
  color?:string;
}

const Loader = (props: LoaderFieldProps): JSX.Element => {
  const { 
    height,
    width,
    className,
    color,
  } = props;
  return (
    
<LoaderContainer>
      <ScaleLoader 
      height={height}
      width={width}
      className={className}
      color={color} />
    </LoaderContainer>
  )
}

export default Loader