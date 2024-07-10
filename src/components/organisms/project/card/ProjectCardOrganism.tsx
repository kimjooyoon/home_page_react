import BoxAtom from "../../../atoms/box/BoxAtom.tsx";
import WorkTitleMolecule from "../../../molecules/list/WorkTitleMolecule.tsx";
import {TextFieldAtomMultiline} from "../../../atoms/textform/TextFormAtom.tsx";

const ProjectCardOrganism = () => (
  <BoxAtom>
    <WorkTitleMolecule
      title={'주문데이터 수집 ...'}
      startDate={'2024-07-02 14:00'}
      endDate={'2024-07-25 18:00'}
      status={'in-progress'}>
    </WorkTitleMolecule>
    <TextFieldAtomMultiline
      value={"기획서 00 내용 기반으로 시스템 전반 설계 및 고객사 컨펌"}
      onChange={() => {
      }}>

    </TextFieldAtomMultiline>
  </BoxAtom>
)

export default ProjectCardOrganism;
