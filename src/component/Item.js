import './Item.css';



const Item = (props) => {
    const {title,amount} = props  // เขียนเป็น Distructuring
    return (
        <div className='list-box'>
            <ul>
                <li className="item-list">{title} <span>{amount}</span>  </li>
            </ul>
        </div>
    )
}

export default Item;












