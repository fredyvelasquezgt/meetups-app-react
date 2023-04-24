import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {

    const navigate = useNavigate();

  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-gettings-started-18510-default-rtdb.firebaseio.com/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          header: {
              'Content-Type' : 'application/json'
          }
      }
    ).then(() => {
        navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
