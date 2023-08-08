import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';
function CarList() {
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { data, searchItem } }) => {
        const filteredCars = data.filter((car) =>
            car.name.toLowerCase().includes(searchItem.toLowerCase())
        );
        return {
            cars: filteredCars,
            name: form.name
        }
    });
    const handleCarRemove = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} -${car.cost}
                </p>
                <button onClick={() => handleCarRemove(car)} className='button is-danger'>Delete</button>
            </div>
        )
    })
    return <div className='car-list has-text-primary-dark'>
        {renderedCars}
        <hr />
    </div>
}


export default CarList;