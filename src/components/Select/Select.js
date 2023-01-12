import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const Select = ({ label, value, onChange, children }) => {
  let displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
       <SelectWrapper value={value} onChange={onChange} >
        {children}
      </SelectWrapper>
      <CustomSelect aria-hidden="true">{displayedValue}
      <Icon id="chevron-down" strokeWidth={1} size={24} />      
      </CustomSelect>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  /* background: transparent;
  color: transparent; */

  border-radius: 8px;
  z-index: 2;
  opacity   :0 ;
  height: 100%;
  width: 100%;
  appearance: none;

  /* &:focus{
    outline: 2px solid ${COLORS.primary};
    border-radius: 9px;
  } */
 `

const CustomSelect = styled.div`
  background: ${COLORS.transparentGray15};
  color:  ${COLORS.gray700};
  width: max-content;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  border-radius: 8px;
  padding: 12px 10px 12px 16px;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${SelectWrapper}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
 `

// const Arrow = styled.div`
//   display: inline-block;
//   height: 0.5em;
//   width: 0.5em;
//   transform: rotate(45deg);
//   border-bottom: 2px solid ${COLORS.gray700};
//   border-right: 2px solid ${COLORS.gray700};
//   margin-left: 1.5em;
//   margin-bottom: 2px;
// `

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  width: fit-content;
  border-radius: 8px;

  &:hover ${CustomSelect}{
    color: ${COLORS.black};
  }
`
export default Select;
