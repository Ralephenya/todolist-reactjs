import './CSS/todoitems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

export const Todoitems = ({no,display,text,setTodos}) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    console.log(no);
    for (let i = 0; i < data.length; i++) {
       if(data[i].no === no){
            data[i].display = data[i].display === "" ? "line-through":"";
            break;        
       }
    }

    setTodos(data);
  }

  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
  }

  return (
    <div className="todoitems">
        <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
            {display === "" ? <img src={not_tick} alt="" />:<img src={tick} alt="" />}
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={() => {deleteTodo(no)}} src={cross} alt="" />
    </div>
  )
}


export default Todoitems