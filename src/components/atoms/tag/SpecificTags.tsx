import TagAtom from './TagAtom';
import DesignIcon from '@mui/icons-material/Brush';
import BackEndIcon from '@mui/icons-material/Code';
import FrontEndIcon from '@mui/icons-material/Web';
import PlanIcon from '@mui/icons-material/EventNote';
import DeployIcon from '@mui/icons-material/CloudUpload';

export const TagAtomDesign = () => (
  <TagAtom label="Design" color="#4CAF50" icon={<DesignIcon />} />
);

export const TagAtomBackEnd = () => (
  <TagAtom label="Back End" color="#9575cd" icon={<BackEndIcon />} />
);

export const TagAtomFrontEnd = () => (
  <TagAtom label="Front End" color="#7E57C2" icon={<FrontEndIcon />} />
);

export const TagAtomPlan = () => (
  <TagAtom label="Plan" color="#8D6E63" icon={<PlanIcon />} />
);

export const TagAtomDeploy = () => (
  <TagAtom label="Deploy" color="#66BB6A" icon={<DeployIcon />} />
);
