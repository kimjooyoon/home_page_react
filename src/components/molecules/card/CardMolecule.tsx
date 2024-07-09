import React from "react";

import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";
import CardAtom from "../../atoms/card/CardAtom.tsx";
import CardContentAtom from "../../atoms/cardcontent/CardContentAtom.tsx";
import BoxAtom from "../../atoms/box/BoxAtom.tsx";

export interface Props {
  title: string,
  name: string,
  email: string,
  company: string,
  phone: string,
  position: string,
  description: string,
}

const CardMolecule: React.FC<Props> =
  ({
     title, name, email,
     company, phone,
     position, description,
   }) => {
    const card = (
      <React.Fragment>
        <CardContentAtom>
          <TypographyAtom sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            {title}
          </TypographyAtom>
          <TypographyAtom variant="h5" component="div">
            {name}
          </TypographyAtom>
          <br/>
          <TypographyAtom sx={{mb: 1.5}} color="text.secondary">
            Email: {email}
            <br/>Position: {position}
            <br/>Phone: {phone}
            <br/>Company: {company}
          </TypographyAtom>
          <TypographyAtom variant="body2">
            {description}
          </TypographyAtom>
        </CardContentAtom>
      </React.Fragment>
    );

    return <div>
      <BoxAtom sx={{minWidth: 275}}>
        <CardAtom variant="outlined" role={'article'} data-testid="text-form-card">{card}</CardAtom>
      </BoxAtom>
    </div>;
  }

export default CardMolecule;
