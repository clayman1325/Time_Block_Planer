import classes from "./Tracker.module.css";

const Tracker = (props) => {
    return (
        <body className={`${classes.body} ${props.css.children_body}`}>

        </body>
    )
}

export default Tracker;