import TextFormAtom from '../atoms/textform/TextFormAtom';
import TextFormCardMolecule from "../molecules/card/TextFormCardMolecule.tsx";

const ProjectPage = () => {

  return (
    <div>
      <h1>Project Page</h1>
      <TextFormAtom value={'test'} onChange={function (): void {
      }}/>
      <TextFormCardMolecule
        name={'Teddy Kim'} email={'asketeddy@gmail.com'}
        company={'stargaser'} phone={'010-2851-3738'}
        position={'front-end'} description={'develop react, flutter.'}
      />
    </div>
  );
};

export default ProjectPage;
