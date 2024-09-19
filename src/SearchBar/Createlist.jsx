import { React} from 'react'
import  {ListedData} from './Component/ListedData.json'

function Createlist(props) {
    return (
        <ul>
            {ListedData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default Createlist