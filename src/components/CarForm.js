import { changeName, changeCost, addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";
function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }
    const handleCostChange = (event) => {
        const amount = parseInt(event.target.value) || 0;
        dispatch(changeCost(amount));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        name && cost && dispatch(addCar({ name, cost }));
    }
    return (<div className="car-form panel">
        <h3 className="subtitle is-3 has-text-danger-dark">Add Car</h3>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label has-text-warning-dark">Name</label>
                    <input
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter Car Name"
                        className="input is-expanded"
                    />
                </div>
                <div className="field">
                    <label className="label has-text-warning-dark">Cost</label>
                    <input className="input is-expanded"
                        value={cost || ''}
                        onChange={handleCostChange}
                        placeholder="Enter Car Cost"
                        type="number"
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
    );
}


export default CarForm;