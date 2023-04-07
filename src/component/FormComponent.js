import './FormComponent.css';
import { useState } from 'react';
const Form_Component = () => {


    // inputTitle
const inputTitle = (event) =>{
    setTitle(event.target.value)
    
}

// inputAmount
const inputAmount = (event) =>{
    setAmount(event.target.value)
}

const saveItem = (event) =>{
    event.preventDefault()
    console.log("บันทึกข้อมูลเรียบร้อย")
}


// input useState
const [title,setTitle] = useState('');
const [amount,setAmount] = useState(0);


    return (
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount}/>
            </div>
            <div>
                <button type='submit' className='btn'>
                    เพิ่มข้อมูล
                </button>
            </div>
        </form>

    )
}

export default Form_Component


