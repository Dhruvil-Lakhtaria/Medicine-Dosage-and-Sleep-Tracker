import Appcard from "./Appcard";

const Appointments = ({ appointments, onDelete }) => {
  return (
    <div className="card-wrapper">
      {appointments.map((app) => (
        <Appcard
          key={app.id}
          id={app.id}
          doctorName={app.doctorName}
          title={app.title}
          date={app.date}
          time={app.time}
          address={app.address}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Appointments;
