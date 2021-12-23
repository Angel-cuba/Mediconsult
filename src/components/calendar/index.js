import Calendar from './components/calendar/calendar.js'

const style = {
	position: "relative",
	margin: "50px auto"
}

class CalendarPage extends Component {
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