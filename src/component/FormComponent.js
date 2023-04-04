import './FormComponent.css';





const Form_Component = () => {
    return (
        <form>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" placeholder="ระบุจำนวนเงินของคุณ" />
            </div>
            <div>
                <button>
                    เพิ่มข้อมูล

                </button>
            </div>
        </form>
    )
}

export default Form_Component


