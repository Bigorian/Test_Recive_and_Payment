import './FormComponent.css';
import { useState } from 'react';
const Form_Component = () => {
    // input useState
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);



    // inputTitle
    const inputTitle = (event) => {
        setTitle(event.target.value)

    }

    // inputAmount
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault() // ใช้ในกรณีเมื่อกดปุ่ม Submit แล้วค่าจะถูกบันทึกไม่หายไป
        const itemData = {
            ee: title,
            aa: amount
        }
        console.log(itemData);
        setTitle('');
        setAmount(0);
    }



    return (
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount} />
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


