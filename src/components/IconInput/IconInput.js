import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return  <Wrapper style={{'--width': width + 'px', ...SIZES[size]}}>
            <VisuallyHidden as='label' for="name">{label}</VisuallyHidden>
            <Icon id={icon} strokeWidth={2} size={SIZES[size]['--icon-size']} /> 
            <InputWrapper type="text" name="" id="" placeholder={placeholder} />
          </Wrapper>;
};


const SIZES = {
  large:{
    '--border-bottom': '2px',
    '--icon-size':20,
    '--font-size': '1.125rem'

  },
  small:{
    '--border-bottom': '1px',
    '--icon-size':15,
    '--font-size': '0.875rem'
  }
}


const Wrapper = styled.div`
  display:flex; 
  position: relative;
  align-items:center;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  width: var(--width);
  color: ${COLORS.gray700};
  padding-bottom: 4px;
  font-size: var(--font-size);
`

const InputWrapper = styled.input`
  border: 0; 
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  outline-offset: 8px;
  position: absolute;
  left: 4px;
  right: 4px;
  padding-left: calc(var(--icon-size) * 1px + 0.5em);
  background: transparent;
  font-weight: 700;

  &::placeholder {  
    font-weight: 400;

    color: ${COLORS.gray500};
    opacity: 1; /* Firefox */
  }

  &:hover {  
    color: ${COLORS.black};
  }
`

export default IconInput;
