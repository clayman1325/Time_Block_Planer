import TimeBlock from "./Components/TimeBlock";
import classes from "./Tracker.module.css";

const Tracker = (props) => {
    return (
        <section className={`${classes.section} ${props.css.children_body}`}>
            <header></header>
            <body>
                {/* <Schedule /> */}
                <div className={classes.test}>
                    <TimeBlock text={"Study Robotics"} time={{start: 900, finish: 930}} />
                </div>
            </body>
        </section>
    )
}

export default Tracker;