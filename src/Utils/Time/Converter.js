const Converter = () => {
    const fromHourToMin = (hour) => {
        hour = hour / 100;
        const minutes = hour * 10 % 2 == 0 ? 0 : 30;
        return Math.floor(hour) * 60 + minutes;
    }
    return {
        fromHourToMin
    }
}


export default Converter;