import style from "./style.module.css";

const TimeInput = () => {
    
    return (
        <div className={style.timeInput}>
            <label htmlFor="time">Tempo</label>
            <input className={style.input} type="number" name="time" id="time" min={1} max={999}/>
            <span>minutos</span>
        </div>
    )
   
}

export default TimeInput;