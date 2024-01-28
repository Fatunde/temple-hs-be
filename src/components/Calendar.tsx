import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export interface IEvent {
  eventList?: Array<any>;
}

const events = [{ title: "Meeting", start: new Date() }];

const UserCalendar = () => (
  <div>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      events={events}
    />
  </div>
);

export default UserCalendar;
