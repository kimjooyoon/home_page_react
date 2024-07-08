import React from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";

export interface Props {
  title: string,
  name: string,
  email: string,
  company: string,
  phone: string,
  position: string,
  description: string,
}

const CardMolecule: React.FC<Props> = ({
                                         title, name, email,
                                         company, phone,
                                         position, description,
                                       }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <br/>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          Email: {email}
          <br/>Position: {position}
          <br/>Phone: {phone}
          <br/>Company: {company}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
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
