import style from "./style.module.css";

interface TimeInputProps {
    min: number
    max: number
}

const TimeInput = ({ min, max }: TimeInputProps) => {
    
    return (
        <div className={style.timeInput}>
            <label htmlFor="time">Tempo</label>
            <input className={style.input} type="number" name="time" id="time" min={min} max={max}/>
            <span>minutos</span>
        </div>
    )
   
}

export default TimeInput;