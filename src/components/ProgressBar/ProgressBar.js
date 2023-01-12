/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
  small: {
    '--bar-height': '8px',
    '--bar-border-radius':'4px',
   },
  medium:{
    '--bar-height': '12px', 
    '--bar-border-radius':'4px',
   },
  large: {
    '--bar-height': '24px',
    '--progress-padding': '4px',
    '--bar-border-radius':'8px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if(!styles){
    throw new Error(`invalid size: ${size}`)
  }
  return <Bar role="progressbar" aria-valuenow={value} style={styles}><ProgressWrapper><Progress value={value} style={styles}></Progress></ProgressWrapper></Bar>;
};


// adjust border radius with padding: (4 + 4) / 2
const Bar = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--bar-height);
  border-radius: var(--bar-border-radius);
  padding: var(--progress-padding);
  overflow: hidden;
`
const ProgressWrapper = styled.div`
  border-radius: 4px;
  height: 100%;  
  overflow: hidden;
` 
const Progress = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px ;
  height: 100%;
  width: ${props => props.value}% ;
` 
export default ProgressBar;
