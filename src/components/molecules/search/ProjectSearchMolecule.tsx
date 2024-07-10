import React, {useState} from 'react';
import BoxAtom from '../../atoms/box/BoxAtom';
import DropDownAtom from '../../atoms/dropdown/DropDownAtom';
import TextFormAtom from '../../atoms/textform/TextFormAtom';
import ButtonAtom from '../../atoms/button/ButtonAtom';
import {SelectChangeEvent} from '@mui/material';

const ProjectSearchMolecule = () => {
  const [searchType, setSearchType] = useState('제목');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (event: SelectChangeEvent<unknown>) => {
    setSearchType(event.target.value as string);
  };

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for', searchType, 'with query:', searchQuery);
  };

  return (
    <BoxAtom
      sx={{display: 'flex', alignItems: 'center', width: '100%', maxWidth: '977px', margin: 'auto', padding: '16px'}}>
      <DropDownAtom label="검색 유형" options={['제목', '작성자', '내용']} value={searchType} onChange={handleSearchTypeChange}/>
      <TextFormAtom label='검색어' value={searchQuery} onChange={handleSearchQueryChange} placeholder="검색"/>
      <ButtonAtom onClick={handleSearch}>검색</ButtonAtom>
    </BoxAtom>
  );
};

export default ProjectSearchMolecule;
