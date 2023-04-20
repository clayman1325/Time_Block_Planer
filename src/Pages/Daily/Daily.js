import classes from "./Daily.module.css";
import Notes from "./Notes";
import Tracker from "./Tracker";

const Daily = () => {
    return (
        <body className= {classes.body}>
            <Notes css={classes}></Notes>
            <Tracker css={classes}></Tracker>
        </body>
    )
}

export default Daily;