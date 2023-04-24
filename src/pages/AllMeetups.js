import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';



function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-gettings-started-18510-default-rtdb.firebaseio.com/meetups.json"
      ).then(response => {
        return response.json();
      }).then(data => {
        setIsLoading(false)
        setLoadedMeetups(data)
      });
  }, []);



    if(isLoading) {
      return <section>
        <p>Loading...</p>
      </section>
    }
  

    return <section>
        <h1>All Meetups</h1>
       <MeetupList meetups={loadedMeetups} />
       
    </section>
}

export default AllMeetupsPage;