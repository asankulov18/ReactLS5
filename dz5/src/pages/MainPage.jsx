import { useState } from "react"
import style from './MainPage.module.css'

function MainPage() {
    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState([])

    const handleAddName = () => {
        setList([...list, inputValue])
        setInputValue('')
    }
    const updateName = (i) => {
        setList(list.map((item, ind) => ind === i ? inputValue : item))
        setInputValue('')
    }

    return (
        <div className={style.div}>
            <input className={style.input} value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text"/>
            <button 
                className={style.button}
                onClick={handleAddName} 
                disabled={inputValue.length === 0}
            >
                Add
            </button>

            <ul>
                
                
                {list.length === 0 ? <h2>Список пуст</h2> : list.map((item, i) => (
                    <li key={i}>
                        <span>{item}</span>
                        <button
                        disabled={inputValue.length === 0}
                        onClick={()=> updateName(i)}
                        >update</button>
                    </li>
                ))} 
                
            </ul>
        </div>
    )
}

export default MainPage