import TextFormAtom from '../atoms/textform/TextFormAtom';
import {CardMoleculeProfile} from "../molecules/card/CardMoleculeProfile.tsx";

const ProjectPage = () => {

  return (
    <div>
      <h1>Project Page</h1>
      <TextFormAtom value={'test'} onChange={function (): void {
      }}/>
      <CardMoleculeProfile
        title={'Profile'}
        name={'Teddy Kim'} email={'asketeddy@gmail.com'}
        company={'stargaser'} phone={'010-2851-3738'}
        position={'front-end'} description={'develop react, flutter.'}
      />
    </div>
  );
};

export default ProjectPage;
