import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";



function App() {
    return (

        <div className="container">
            <h1>แอพบัญชีรายรับ-รายจ่าย</h1>
            <FormComponent/>
            <Transaction />
        </div>
    );
}
export default App;



