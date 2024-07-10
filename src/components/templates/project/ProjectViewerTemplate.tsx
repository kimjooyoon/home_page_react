import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMoleculeProject, { CardMoleculeProjectProps } from '../../molecules/card/CardMoleculeProject';
import ProjectSearchMolecule from '../../molecules/search/ProjectSearchMolecule';
import PaginationAtom from '../../atoms/pagination/PaginationAtom';

interface ProjectViewerTemplateProps {
  projects: CardMoleculeProjectProps[];
  isAdmin: boolean;
}

const ProjectViewerTemplate: React.FC<ProjectViewerTemplateProps> = ({ projects, isAdmin }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>프로젝트 검색</Typography>
      <ProjectSearchMolecule />
      <Typography variant="h6" sx={{ margin: '32px 0 16px' }}>목록</Typography>
      {projects.map((project, index) => (
        <Box key={index} sx={{ marginBottom: '32px' }}>
          <CardMoleculeProject {...project} isAdmin={isAdmin} />
        </Box>
      ))}
      <PaginationAtom
        count={10}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default ProjectViewerTemplate;
