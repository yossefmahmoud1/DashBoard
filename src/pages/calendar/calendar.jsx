import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Modal,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEventTitle("");
  };

  const handleAddEvent = () => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if (eventTitle) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${eventTitle}`,
        title: eventTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }
    handleModalClose();
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={isSmallScreen ? "10px" : "20px"}>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="add-event-modal-title"
        aria-describedby="add-event-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: isSmallScreen ? "90%" : 400,
            maxWidth: "400px",
          }}
        >
          <Typography id="add-event-modal-title" variant="h6" component="h2">
            Add New Event
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            onClick={handleAddEvent}
            sx={{ mt: 2 }}
            variant="contained"
            color="secondary"
          >
            Add Event
          </Button>
        </Box>
      </Modal>

      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={isMobile ? "column" : "row"}
        gap={isMobile ? 2 : 0}
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex={isMobile ? "none" : "1 1 20%"}
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          width={isMobile ? "100%" : "auto"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box
          flex={isMobile ? "none" : "1 1 100%"}
          ml={isMobile ? 0 : "15px"}
          width={isMobile ? "100%" : "auto"}
        >
          <FullCalendar
            height={isMobile ? "60vh" : "75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: isMobile
                ? "dayGridMonth"
                : "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
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
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
