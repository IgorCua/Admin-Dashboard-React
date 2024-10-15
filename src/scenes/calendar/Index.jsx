import { useState } from "react";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { 
    Box, 
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
    userTheme
} from "@mui/material";
import { Header } from "../../components/Header";
import { tokens } from "../../styles/theme";


export const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Pleace enter a new title for your event.');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure that you want to delete the event '${selected.event.title}'?`));
        selected.event.remove();
    };
    console.log(currentEvents)
    return <Box m={'20px'}>
        <Header title={'CALENDAR'} subtitle={'Full calendar interactive page'}/>

        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            {/* CALENDAR SIDEBAR */}
            <Box sx={{
                flex: '1 1 20%',
                backgroundColor: colors.primary[400],
                p: '15px',
                borderRadius: '4px'
            }}>
                <Typography variant="h5">Events</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem 
                            key={event.id}
                            sx={{
                                m: '10px 0',
                                backgroundColor: colors.greenAccent[500],
                                borderRadius: '2px'
                            }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* CALENDAR */}
            <Box sx={{
                ml: '15px',
                flex: '1 1 100%'
            }}>
                <FullCalendar
                    height={'75vh'}
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth timeGridWeek timeGridDay listMonth'
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        {id: '123', title: 'All-day event', date: '2024-08-28'},
                        {id: '1143', title: 'Timed event', date: '2024-08-25'},
                        {id: '123235', title: 'event1', date: '2024-09-04'},
                        {id: '1231235', title: 'event2', date: '2024-09-8'},
                        {id: '121235', title: 'event3', date: '2024-09-20'},
                        {id: '12235', title: 'event4', date: '2024-09-23'},
                        {id: '123735', title: 'event5', date: '2024-10-27'}
                    ]}
                />
            </Box>
        </Box>
    </Box>
}