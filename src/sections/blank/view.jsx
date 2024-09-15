'use client';
import Box from '@mui/material/Box';
import { Iconify } from 'src/components/iconify';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function BlankView({ title = 'Blank' }) {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      />
      {/* <ComponentBlock> */}
      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
          <Typography variant="subtitle1">Hi Hello</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{'This is Detail'}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
          <Typography variant="subtitle1">Hi Hello</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{'This is Detail'}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
          <Typography variant="subtitle1">Hi Hello</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{'This is Detail'}</Typography>
        </AccordionDetails>
      </Accordion>
      {/* </ComponentBlock> */}
    </DashboardContent>
  );
}
