import './FormComponent.css';
const Form_Component = () => {

const inputTitle = (event) =>{
    console.log(event.target.value)
    
}



    return (
        <form>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" />
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


