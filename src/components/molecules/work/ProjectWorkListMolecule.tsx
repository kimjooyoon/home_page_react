import BoxAtom from "../../atoms/box/BoxAtom.tsx";
import ButtonAtom from "../../atoms/button/ButtonAtom.tsx";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";
import TextFormAtom, {TextFieldAtomMultiline} from "../../atoms/textform/TextFormAtom.tsx";

const ProjectWorkListMolecule = () => {
  return (
    <BoxAtom sx={{
      border: '1px solid #E0E0E0',
      borderRadius: '4px',
      padding: '16px',
      width: '100%',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      <BoxAtom sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
        <TextFormAtom
          label="작업 이름" value={""} onChange={() => {
        }}/>
        <ButtonAtom onClick={() => {
        }} variant="contained" sx={{height: '56px', width: '150px', backgroundColor: '#9575cd', color: '#fff', marginLeft: '20px'}}
        >Back
          End</ButtonAtom>
      </BoxAtom>
      <BoxAtom sx={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
        <TypographyAtom variant="body1" sx={{marginRight: '16px'}}>
          2024-07-02 14:00 ~ 2024-07-25 18:00
        </TypographyAtom>
        <ButtonAtom onClick={() => {
        }} variant="contained" sx={{backgroundColor: '#6a1b9a', color: '#fff'}}>진행중</ButtonAtom>
      </BoxAtom>
      <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
        <TextFieldAtomMultiline
          label="Front End 작업 내용" value={""} onChange={() => {
        }}/>
      </BoxAtom>
      <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
        <TypographyAtom variant="body2">
          해당 작업은 (domain) 과 관련된 작업임. 필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 통화하여, 관련 프로젝트를 전달받을 수 있음.
          이후 작업은 A 회사 솔루션 사(강아무개 주임, 010-0000-0000)에게 전달할 예정임.
          연락 담당자: Joy
        </TypographyAtom>
      </BoxAtom>
      <BoxAtom sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <ButtonAtom onClick={() => {
        }} variant="outlined" sx={{marginRight: '8px'}}>취소 요청</ButtonAtom>
        <ButtonAtom onClick={() => {
        }} variant="contained" sx={{backgroundColor: '#6a1b9a', color: '#fff'}}>저장</ButtonAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default ProjectWorkListMolecule;
