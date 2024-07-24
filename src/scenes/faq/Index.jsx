import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Box, 
    Typography, 
    useTheme 
} from "@mui/material";
import { Header } from "../../components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../styles/theme";

export const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m={'20px'}>
        <Header title={'FAQ'} subtitle={'Frequently asked questions page'}/>
        
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{color: colors.greenAccent[500]}}>
                    An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Quidem, quos ullam eligendi illo vero placeat!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}