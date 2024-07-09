import React from "react";
import {Box, Card, CardContent} from "@mui/material";
import TypographyAtom from "../../atoms/typography/TypographyAtom.tsx";

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
        <CardContent>
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
        </CardContent>
      </React.Fragment>
    );

    return <div>
      <Box sx={{minWidth: 275}}>
        <Card variant="outlined" role={'article'} data-testid="text-form-card">{card}</Card>
      </Box>
    </div>;
  }

export default CardMolecule;
