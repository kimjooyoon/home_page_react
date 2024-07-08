import TextFormAtom from '../atoms/textform/TextFormAtom';
import CardMolecule from "../molecules/card/CardMolecule.tsx";

const ProjectPage = () => {

  return (
    <div>
      <h1>Project Page</h1>
      <TextFormAtom value={'test'} onChange={function (): void {
      }}/>
      <CardMolecule
        title={'Profile'}
        name={'Teddy Kim'} email={'asketeddy@gmail.com'}
        company={'stargaser'} phone={'010-2851-3738'}
        position={'front-end'} description={'develop react, flutter.'}
      />
    </div>
  );
};

export default ProjectPage;
