import React from "react";
import BoxAtom from "../../atoms/box/BoxAtom";
import {GetStatusButtonAtom} from "../../atoms/button/ButtonAtom";
import TypographyAtom from "../../atoms/typography/TypographyAtom";
import TextFormAtom, {TextFieldAtomMultiline} from "../../atoms/textform/TextFormAtom";

export interface CustomerProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

export interface CardMoleculeProjectProps {
  projectName: string;
  startDate: string;
  endDate: string;
  status: "in-progress" | "completed" | "planned" | "canceled";
  projectDetails: string;
  description: string;
  customerProfile: CustomerProfile;
}

const CardMoleculeProject: React.FC<CardMoleculeProjectProps> =
  ({
     projectName, startDate, endDate,
     status, projectDetails,
     description,
     customerProfile,
   }) => {
    return (
      <BoxAtom sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        padding: '16px',
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <BoxAtom sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
          {GetStatusButtonAtom(status)}
        </BoxAtom>

        <TypographyAtom variant="h6" sx={{marginBottom: '8px'}}>
          {projectName}
        </TypographyAtom>

        <TypographyAtom variant="body2" sx={{marginBottom: '16px'}}>
          {startDate} ~ {endDate}
        </TypographyAtom>

        <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
          <TextFieldAtomMultiline
            label="Detail"
            value={projectDetails}
            onChange={() => {
            }}
          />
        </BoxAtom>

        <BoxAtom sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
          <BoxAtom sx={{width: '100%', marginRight: '16px'}}>
            <TextFieldAtomMultiline label={'Description'} value={description} rows={14} onChange={() => {
            }}/>
          </BoxAtom>
          <BoxAtom sx={{border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', width: '300px'}}>
            <TypographyAtom variant="h6" sx={{marginBottom: '8px'}}>
              고객 프로필 정보
            </TypographyAtom>
            <TextFormAtom label="이름" value={customerProfile.name} onChange={() => {
            }}/>
            <TextFormAtom label="Email" value={customerProfile.email} onChange={() => {
            }}/>
            <TextFormAtom label="연락처" value={customerProfile.phone} onChange={() => {
            }}/>
            <TextFormAtom label="회사명" value={customerProfile.company} onChange={() => {
            }}/>
            <TextFormAtom label="직책" value={customerProfile.position} onChange={() => {
            }}/>
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
    );
  };

export default CardMoleculeProject;
