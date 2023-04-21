import './Item.css';




const Item = (props) => {
   
    const {title,amount} = props  // เขียนเป็น Distructuring
    //สถานะการเงินที่ส่งเข้ามาแต่ละรายการ
    const status = amount < 0 ? "expense" : "income" ; //เขียนแบบ Ternary
    // โดยเราจะเอา "expense" และ "income" มาปรับแต่งเป็น Style

    const symbol = amount < 0 ? "-" : "+";
    return (
        <div className='list-box'>
            <ul>
                <li className={status}>{title}<span> {Math.abs.symbol}{amount}</span>  </li>
            </ul>
        </div>
    )
 }
 
 export default Item;
 
 
 
 



 















