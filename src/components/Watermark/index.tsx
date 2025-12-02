import style from "./style.module.css";

const Watermark = () => {
    return (
        <div className={style.waterMark}>
            <p>Essa página é apenas um protótipo, não é o sistema final</p>
            <p>Os dados da página são estáticos (não há comunicação com backend)</p>
        </div>
    )
}

export default Watermark;