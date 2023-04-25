import './FormComponent.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form_Component = (props) => {
    console.log("Render FormComponent")

    // input useState
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formValid,setFormValid] = useState(false);

    // inputTitle
    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    // inputAmount
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    // 
    const saveItem = (event) => {
        event.preventDefault()
        // ใช้ในกรณีเมื่อกดปุ่ม Submit แล้วค่าจะถูกบันทึกไม่หายไป
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        // ตรง(itemData) เป็นการส่งข้อมูลจาก Component ลูกไปหา Component แม่ส่งไปใน Parameter newItem
        // Clear State 
        setTitle('');
        setAmount(0);
    }

    // useEffect จะถูกใช้เมื่อมีการ re-Render หรือ เปลี่ยนแปลงค่าภายใน FormComponent
    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setFormValid(checkData)
    }, [title,amount])
    // Array ตัวหลังเป็นการดักจับการเปลี่ยนแปลง

        



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
                <button type='submit' className='btn' disabled={!formValid}>
                    เพิ่มข้อมูล
                </button>
            </div>
        </form>

    )
}

export default Form_Component
















