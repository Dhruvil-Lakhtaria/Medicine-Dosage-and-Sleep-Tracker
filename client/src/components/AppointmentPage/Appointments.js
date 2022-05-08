import Appcard from "./Appcard";

const Appointments = ({ appointments, onDelete }) => {
  return (
    <div className="card-wrapper">
      {appointments.map((app) => (
        <Appcard
          key={app._id}
          appointment_with={app.appointment_with}
          appointment_title={app.appointment_title}
          appointment_date={app.appointment_date}
          appointment_address={app.appointment_address}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Appointments;
