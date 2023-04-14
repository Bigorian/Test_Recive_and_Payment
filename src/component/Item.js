import './Item.css';



const Item = (props) => {
   





    const {title,amount} = props  // เขียนเป็น Distructuring



     //สถานะการเงินที่ส่งเข้ามาแต่ละรายการ
     const status = amount<0 ?  "รายจ่าย":"รายรับ"  //เขียนแบบ Ternary



    return (
        <div className='list-box'>
            <ul>
                <li className="item-list">{title} <span>{amount}</span>  </li>
            </ul>
        </div>
    )
}

export default Item;












