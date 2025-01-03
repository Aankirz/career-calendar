import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default Dashboard;
