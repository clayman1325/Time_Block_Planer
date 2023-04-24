const Schedule = () => {

    return (
        <div>
            {
                columns.map((column) => {
                    <Column data={column}/>
                })
            }
        </div>
    )
}
export default Schedule;