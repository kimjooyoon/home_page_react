import BoxAtom from '../../atoms/box/BoxAtom';
import TypographyAtom from '../../atoms/typography/TypographyAtom';
import BadgeAtom from '../../atoms/badge/BadgeAtom';

const StatusBadgeMolecule = ({ status }: { status: string }) => {
  return (
    <BadgeAtom badgeContent={status} color="primary">
      <BoxAtom sx={{ padding: '4px 8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}>
        <TypographyAtom>{status}</TypographyAtom>
      </BoxAtom>
    </BadgeAtom>
  );
};

export default StatusBadgeMolecule;
