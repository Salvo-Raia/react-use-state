export default function Buttons ({item, selectedIndex, setselectedIndex}) {
    return <li key={item.id - 1}>
             <button className={(selectedIndex === item.id -1) ? "btn-active" : ""} onClick={() => setselectedIndex((selectedIndex === item.id - 1) ? null   : item.id - 1)}>{item.title}</button>
           </li>
}