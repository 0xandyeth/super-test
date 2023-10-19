import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { OptionType } from '../../constants/types';
import axios from 'axios';

interface DropDownProps {
    handleDropChange:(option:OptionType | null)=>void
}

const DropDown: React.FC<DropDownProps> = ({handleDropChange}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [countries,setCountries] = useState([]);
  
  useEffect(() => {
    // Fetch the list of countries from the Rest Countries API
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // Extract the data from the response
        const countryData = response.data;
        // Map the data to an array of objects with label and value properties
        const countryOptions = countryData.map((country:any) => ({
          value: country.cca2, 
          label: country.name.common,
        }));

        // Set the list of countries in the state
        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);
  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
    handleDropChange(selectedOption)
  };
  return (
    <Select
      value={selectedOption}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={countries}
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
