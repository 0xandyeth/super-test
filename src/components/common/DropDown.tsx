import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { OptionType } from '../../constants/types';
interface DropDownProps {}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const DropDown: React.FC<DropDownProps> = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption)
  };
  return (
    <Select
      value={selectedOption}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder='Select country'
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (base,state) => ({
          ...base,
          borderRadius:'0',
          height:'40px',
          fontWeight:'400',
          fontSize:'14px',
          fontFamily:'Inter,sans-serif',
          border: '0 !important',
          boxShadow: '0 !important',
          '&:hover': {
              border: '0 !important'
           }
        }
        ),
        option: (base,state) => ({
            ...base,
             color:'#413C5F',
             fontWeight:'400',
          fontSize:'14px',
          fontFamily:'Inter,sans-serif',
          display:'flex',
          textAlign:'center',
          backgroundColor:state.isSelected?'#F6F4FF':'white',
          '&:hover':{
            backgroundColor:state.isFocused?'#F6F4FF':'white',
          },
          '&::after':{
             content:state.isSelected?'"✓"':'""',
             fontSize:'16px',
             marginLeft:'10px'
          }
         
          }),
      }}
    />
  );
};

export default DropDown;
