import { useSelector } from 'react-redux';
function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchItem } }) =>
        data.filter((car) =>
            car.name.toLowerCase().includes(searchItem.toLowerCase())
        ).reduce((acc, car) => acc + car.cost, 0)
    )
    return (
        <div className="car-value has-text-success">
            Total Cost  : ${totalCost}
        </div>
    )
}


export default CarValue;