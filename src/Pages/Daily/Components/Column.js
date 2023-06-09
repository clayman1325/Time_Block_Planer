import classes from "./Column.module.css";
import TimeBlock from "./TimeBlock";

const Column = () => {
    const timeBlocks = [
        { text: "create events in calendar", start: 800, finish: 900 },
        { text: "Study Robotics", start: 1200, finish: 1300 },
        { text: "Investment and Finance", start: 1300, finish:1330 },
        { text: "Node JS", start: 1330, finish: 1900 },
        { text: "Juego de Magia",start: 1900, finish: 2200 }
    ]

    const buildColumn = () => {
        let time = 530;
        let index = 0;
        let blocks = [];
        let increment = (time) => (time) % 100 == 30 ? time + 70 : time + 30;

        while(time < 2200) {
            let nextTime = { start: time, finish: increment(time) };
            let text = "";
            let updateTime;
            if(index < timeBlocks.length && timeBlocks[index].start == time) {
                nextTime   = { start: timeBlocks[index].start, finish: timeBlocks[index].finish }
                text       = timeBlocks[index].text;
                updateTime = timeBlocks[index].finish - 30;
                index++;
            }

            time = increment(updateTime || time);

            blocks.push(<TimeBlock text={text} time={nextTime} />)
        }
        return blocks
    }

    return (
        <div className={classes.main}>
            <div className={classes.column} >
                { buildColumn() }
            </div>
            {/* <TimeBlock text={"Study Robotics"} time={{start: 900, finish: 930}} /> */}

        </div>
    )
}
export default Column;