import Item from "./Item";
import DataContext from "../data/DataContext";




const Transaction = (props) => {
    const { items } = props

    return (
        <div>
            <ul>
                {/* <Item title={Data[0].title} amount={Data[0].amount} unit={Data[0].unit} />
            <Item title={Data[1].title} amount={Data[1].amount} unit={Data[1].unit} />
            <Item title={Data[2].title} amount={Data[2].amount} unit={Data[0].unit} />
            <Item title={Data[3].title} amount={Data[3].amount} unit={Data[1].unit} /> */}


                {/* // เขียน แบบ ลูป */}

                {items.map((element) => {
                    // return <Item title={element.title} amount={element.amount} />    
                    return <Item {...element} key={element.id} /> // เขียนแบบ Spread Operator
                })}
            </ul>
            <DataContext.Consumer>
               {value=><p>{value}</p>}
            </DataContext.Consumer>
        </div>
    )
}


export default Transaction;


















