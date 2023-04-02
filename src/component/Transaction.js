import Item from "./Item";



const Transaction = () => {

    

    const Data = [{ id:1, title: "ค่ารักษาพยาบาล", amount: "2,000" ,unit:"USD" },
    { id:2, title: "ค่าน้ำมัน", amount: "5,000" , unit:"THB"},
    { id:3, title: "ค่าเช่าบ้าน", amount: "8,000" },
    { id:4, title: "เงินเดือน", amount: "80,000" },
    { id:5, title: "เงินอื่นๆ" , amount: "20,500"}
    ]




    return (
        <ul>
            {/* <Item title={Data[0].title} amount={Data[0].amount} unit={Data[0].unit} />
            <Item title={Data[1].title} amount={Data[1].amount} unit={Data[1].unit} />
            <Item title={Data[2].title} amount={Data[2].amount} unit={Data[0].unit} />
            <Item title={Data[3].title} amount={Data[3].amount} unit={Data[1].unit} /> */}
            
            
            {/* // เขียน แบบ ลูป */}
            
            {Data.map((element)=>{
            // return <Item title={element.title} amount={element.amount} />    
                return <Item {...element} key={element.id} /> // เขียนแบบ Spread Operator
            })}
        </ul>
    )
}


export default Transaction;











