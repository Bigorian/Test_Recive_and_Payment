import Transaction from "./component/Transaction";
import './App.css';
import FormComponent from "./component/FormComponent";
import { useState } from "react";




function App() {
    //ข้อมูล Object
    const initData = [
        { id: 1, title: "ค่ารักษาพยาบาล", amount: "2,000", unit: "USD" },
        { id: 2, title: "ค่าน้ำมัน", amount: "5,000", unit: "THB" },
        { id: 3, title: "ค่าเช่าบ้าน", amount: "8,000" },
        { id: 4, title: "เงินเดือน", amount: "80,000" },
        { id: 5, title: "เงินอื่นๆ", amount: "20,500" }
    ]

    //สร้าง State
    const [items, setItems] = useState([])


    //ข้อมูลที่ส่งในรูป Props ไปยังไฟล์ FromComponent
    const onAddNewItem = (newItem) => {
            //newItem คือข้อมูลที่ได้รับจาก FormComponent
        setItems((prevItem)=>{
            return [newItem/*,...prevItem*/]
        }
        //  โดยข้อมูลที่ได้จาก FormComponent จะอยู่ด้านบน แล้ว ตามมมาด้วย Arrat initData
        )





        // console.log("ข้อมูลที่ส่งมาจาก FormComponent =", newItem)
        // เมื่อเราทราบแล้วว่า เราได้รับข้อมูลจาก FormComponent เราจะเอาค่าที่ได้มาเก็บใน State "setItems"
        // ตัว Parameter newItem คือ Parameter  ที่สร้างไว้เพื่อรอรับข้อมูลจาก itemData 
    }


    return (

        <div className="container">
            <h1>แอพบัญชีรายรับ-รายจ่าย</h1>
            <FormComponent onAddItem={onAddNewItem} />
            <Transaction items={items} />
        </div>
    );
}
export default App;



