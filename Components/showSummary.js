import { useState } from "react";
import HtmlRenderer from "../Components/HtmlRenderer";
import classes from "./showSummary.module.css";
const ShowSummary = (props) => {
  const content = props.summary;
  const bookTickets = () => {
    setBooked(!booked);
  };
  const [booked, setBooked] = useState(false);

  return (
    <div className={props.className}>
      {!booked && (
        <div>
          <h1>Movie Summary</h1>
          <img src={props.Image} alt={props.name} />
          <HtmlRenderer htmlString={content} />
          <div className={classes.buttons}>
            <button onClick={props.handleShowSummary}>Go back</button>
            <button onClick={bookTickets}>Book tickets</button>
          </div>
        </div>
      )}
      {booked && (
        <div className={classes.form}>
          <form>
            <div>
              <label>Movie</label>

              <input type="text" defaultValue={props.name} readOnly />
            </div>
            <div>
              {" "}
              <label>Number of tickets</label>
              <input type="number" defaultValue={1} min={0} />
            </div>

            <div className={classes.buttons}>
              <button onClick={bookTickets}>Confirm</button>
              <button onClick={bookTickets}>Back</button>{" "}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default ShowSummary;
