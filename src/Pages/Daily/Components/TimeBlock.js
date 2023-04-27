import { useEffect, useState } from "react";
import classes from "./TimeBlock.module.css";
import Converter from "../../../Utils/Time/Converter"

const BLOCK_HEIGHT = 25;
const TimeBlock = (props) => {
    const [timeBlocks, setTimeBlocks] = useState({});
    const fromHourToMin = Converter().fromHourToMin;

    const buildTimeBlock = () => {
        const height = BLOCK_HEIGHT * timeBlocks;
        return(
            <div className={classes.unique} style={{height : `${height}px`}}>
                <aside className={classes.aside}>{props.time.start}</aside>
                <div className={classes.text}>{props.text.trim().slice(0,19)}</div>
            </div>
        )
    }

    const handleTimeblock = () => {
        alert("edit or create new time block")
    }

    useEffect(()=> {
        const finish = fromHourToMin(props.time.finish);
        const start  = fromHourToMin(props.time.start);
        const numberOfBlocks = (finish - start) / 30;
        setTimeBlocks(numberOfBlocks);
        console.log(props.time.finish, finish, props.time.start, start, start - finish, numberOfBlocks)
    }, [props])
    return (
        <div onClick={handleTimeblock}>
            { buildTimeBlock() }
        </div>
    )
}
export default TimeBlock;