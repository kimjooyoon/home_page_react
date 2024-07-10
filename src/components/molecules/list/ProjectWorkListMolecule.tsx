import {useState} from 'react';
import BoxAtom from "../../atoms/box/BoxAtom";
import ButtonAtom, {GetStatusButtonAtom} from "../../atoms/button/ButtonAtom";
import TypographyAtom from "../../atoms/typography/TypographyAtom";
import TextFormAtom, {TextFieldAtomMultiline} from "../../atoms/textform/TextFormAtom";
import {CategoryTagAtom} from '../../atoms/tag/SpecificTags';

interface ProjectWorkListMoleculeProps {
  taskName: string;
  dateRange: string;
  frontEndContent: string;
  description: string;
  onTaskNameChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onCancel: () => void;
  onSave: () => Promise<void>;
  tagCategory: 'design' | 'back-end' | 'front-end' | 'plan' | 'deploy';
  status: 'planned' | 'in-progress' | 'canceled' | 'completed';
  isAdmin: boolean; // 관리자 여부 추가
  memo: string; // 메모 내용 추가
}

const ProjectWorkListMolecule =
  ({
     taskName,
     dateRange,
     frontEndContent,
     description,
     onTaskNameChange,
     onContentChange,
     onCancel,
     onSave,
     tagCategory,
     status,
     isAdmin,
     memo
   }: ProjectWorkListMoleculeProps) => {
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
      setLoading(true);
      try {
        await onSave();
      } finally {
        setLoading(false);
      }
    };

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
            label="작업 이름"
            value={taskName}
            onChange={e => onTaskNameChange(e.target.value)}
          />
          <BoxAtom sx={{marginLeft: '16px'}}>
            {CategoryTagAtom(tagCategory)}
          </BoxAtom>
        </BoxAtom>
        <BoxAtom sx={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
          <TypographyAtom variant="body1" sx={{marginRight: '16px'}}>
            {dateRange}
          </TypographyAtom>
          {GetStatusButtonAtom(status)}
        </BoxAtom>
        <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
          <TextFieldAtomMultiline
            label="Front End 작업 내용"
            value={frontEndContent}
            onChange={e => onContentChange(e.target.value)}
          />
        </BoxAtom>
        <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
          <TextFieldAtomMultiline label={'작업 내용'} value={description} onChange={() => {
          }}/>
        </BoxAtom>
        {isAdmin && (
          <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
            <TextFieldAtomMultiline
              label="관리자 메모"
              value={memo}
              onChange={() => {
              }}
              placeholder="메모 내용"
            />
          </BoxAtom>
        )}
        <BoxAtom sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <ButtonAtom
            onClick={onCancel}
            variant="outlined"
            sx={{marginRight: '8px'}}
          >
            취소 요청
          </ButtonAtom>
          <ButtonAtom
            onClick={handleSave}
            variant="contained"
            sx={{backgroundColor: '#6a1b9a', color: '#fff'}}
            disabled={loading}
          >
            {loading ? '저장 중...' : '저장'}
          </ButtonAtom>
        </BoxAtom>
      </BoxAtom>
    );
  };

export default ProjectWorkListMolecule;
