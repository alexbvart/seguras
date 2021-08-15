import AlertItem from "./AlertItem";

const AlertList = () => {
    return (  
        <section>
            <h1>Alertas Registradas</h1>
            <div>
               <AlertItem title="kevin"/>
               <AlertItem title="jpse"/>
               <AlertItem/>
            </div>
        </section>
    );
}

export default AlertList;