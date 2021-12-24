import React from 'react'
// import Calendar from './components/calendar/calendar.js'
import Calendar from './calendar'

const style = {
	position: "relative",
	margin: "50px auto"
}

class CalendarPage extends React.Component {
    onDayClick = (e, day) => {
        alert(day);
    }

    render() {
        return (
            <div className="App">
                <Calendar style={style} width="302px" 
					onDayClick={(e, day)=> this.onDayClick(e, day)}/>
            </div>
        );
    }
}

export default CalendarPage;