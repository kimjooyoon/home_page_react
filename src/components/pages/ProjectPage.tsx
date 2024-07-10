import ProjectViewerTemplate from '../templates/project/ProjectViewerTemplate';
import { CardMoleculeProjectProps } from '../molecules/card/CardMoleculeProject';
import { CustomerProfile } from '../molecules/card/CardMoleculeProject';
import BoxAtom from "../atoms/box/BoxAtom.tsx";

const ProjectPage = () => {
  const customerProfile: CustomerProfile = {
    name: '홍길동',
    email: 'hong@gildong.com',
    phone: '010-0000-0000',
    company: 'ABC 회사',
    position: '과장',
  };

  const projects: CardMoleculeProjectProps[] = [
    {
      projectName: '주류데이터 수집 및 업무 자동화 프로그램 개발',
      startDate: '2024-07-02 14:00',
      endDate: '2024-07-25 18:00',
      status: 'in-progress',
      projectDetails: '기획서 00 내용 기반으로 시스템 전반 설계 및 교차사 진행',
      description: '해당 작업은 (domain) 과 관련된 작업임. 필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 통화하여, 관련 프로젝트를 전달받을 수 있음. 이후 작업은 A 회사 솔루션 사(강아무개 주임, 010-0000-0000)에게 전달할 예정임. 연락 담당자: Joy',
      customerProfile,
      isAdmin: true,
    },
    {
      projectName: '데이터 분석 시스템 구축',
      startDate: '2024-08-01 10:00',
      endDate: '2024-08-31 17:00',
      status: 'planned',
      projectDetails: '데이터 분석을 위한 시스템 구축 및 초기 데이터 셋업',
      description: '',
      customerProfile,
      isAdmin: false,
    },
    {
      projectName: '데이터 분석 시스템 구축',
      startDate: '2024-08-01 10:00',
      endDate: '2024-08-31 17:00',
      status: 'planned',
      projectDetails: '데이터 분석을 위한 시스템 구축 및 초기 데이터 셋업',
      description: '',
      customerProfile,
      isAdmin: false,
    },
    {
      projectName: '데이터 분석 시스템 구축',
      startDate: '2024-08-01 10:00',
      endDate: '2024-08-31 17:00',
      status: 'planned',
      projectDetails: '데이터 분석을 위한 시스템 구축 및 초기 데이터 셋업',
      description: '',
      customerProfile,
      isAdmin: false,
    },
    {
      projectName: '데이터 분석 시스템 구축',
      startDate: '2024-08-01 10:00',
      endDate: '2024-08-31 17:00',
      status: 'planned',
      projectDetails: '데이터 분석을 위한 시스템 구축 및 초기 데이터 셋업',
      description: '',
      customerProfile,
      isAdmin: false,
    },
    {
      projectName: '데이터 분석 시스템 구축',
      startDate: '2024-08-01 10:00',
      endDate: '2024-08-31 17:00',
      status: 'planned',
      projectDetails: '데이터 분석을 위한 시스템 구축 및 초기 데이터 셋업',
      description: '',
      customerProfile,
      isAdmin: false,
    },
  ];

  return (
    <BoxAtom sx={{ marginTop: '4rem', width: '100%' }}>
      <ProjectViewerTemplate projects={projects} />
    </BoxAtom>
  );
};

export default ProjectPage;
