import { useEffect, useState } from "react";
import classes from "./TimeBlock.module.css";

const BLOCK_HEIGHT = 25;
const TimeBlock = (props) => {
    const [timeBlocks, setTimeBlocks] = useState({});

    const buildTimeBlock = () => {
        const height = BLOCK_HEIGHT * timeBlocks;
        return(
            <div className={classes.unique} style={{height : `${height}px`}}>
                {props.text}
            </div>
        )
    }

    useEffect(()=> {
        let numberOfBlocks = Math.abs(props.time.finish - props.time.start) / 60;
        numberOfBlocks = numberOfBlocks % 2 == 0 ? numberOfBlocks : Math.floor(numberOfBlocks) + 1;
        setTimeBlocks(numberOfBlocks);
    }, [props])
    return (
        <div>
            { buildTimeBlock() }
        </div>
    )
}
export default TimeBlock;