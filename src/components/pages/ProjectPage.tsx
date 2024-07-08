import {ChangeEvent} from 'react';
import TextFormAtom from '../atoms/textform/TextFormAtom';

const ProjectPage = () => {


  return (
    <div>
      <h1>Project Page</h1>
      <TextFormAtom value={'test'} onChange={function (_: ChangeEvent<HTMLInputElement>): void {
      }}/>
    </div>
  );
};

export default ProjectPage;
