import React, {useState} from 'react';
import CardMoleculeProject, {CardMoleculeProjectProps} from '../../molecules/card/CardMoleculeProject';
import ProjectSearchMolecule from '../../molecules/search/ProjectSearchMolecule';
import PaginationAtom from '../../atoms/pagination/PaginationAtom';
import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";

interface ProjectViewerTemplateProps {
  projects: CardMoleculeProjectProps[];
}

const ProjectViewerTemplate: React.FC<ProjectViewerTemplateProps> = ({projects}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <BoxAtom sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '32px'}}>
      <BoxAtom sx={{width: '100%', maxWidth: '1000px', marginBottom: '32px'}}>
        <TypographyAtom variant="h5" sx={{marginBottom: '24px'}}>프로젝트 검색</TypographyAtom>
        <ProjectSearchMolecule/>
      </BoxAtom>
      <BoxAtom sx={{width: '100%', maxWidth: '1000px', marginBottom: '32px'}}>
        <TypographyAtom variant="h6" sx={{marginBottom: '24px'}}>목록</TypographyAtom>
        {projects.map((project, index) => (
          <BoxAtom key={index} sx={{marginBottom: '40px'}}>
            <CardMoleculeProject {...project} />
          </BoxAtom>
        ))}
      </BoxAtom>
      <PaginationAtom
        count={10}
        page={currentPage}
        onChange={handlePageChange}
      />
    </BoxAtom>
  );
};

export default ProjectViewerTemplate;
