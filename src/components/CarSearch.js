import { useDispatch, useSelector } from "react-redux";
import { changeSearchItem } from "../store";
function CarSearch() {
    const dispatch = useDispatch();
    const searchItem = useSelector((state) => {
        return state.cars.searchItem;
    })
    const handleSearchItemChange = (event) => {
        dispatch(changeSearchItem(event.target.value));
    }
    return (
        <div className="list-header">
            <h1 className="title is-5 pl-4 has-text-success-dark">My Cars</h1>
            <div className="search field is-horizontal">
                <label className="label has-text-success">Search</label>
                <input
                    value={searchItem}
                    onChange={handleSearchItemChange}
                    className="input"
                />
            </div>
        </div>
    )
}


export default CarSearch;