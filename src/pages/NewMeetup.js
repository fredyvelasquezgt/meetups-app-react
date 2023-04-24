import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
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
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
