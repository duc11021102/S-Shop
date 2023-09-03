const OrdersList = (props) => {
    return (
        <div className="mt-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Products</th>
                        <th>Cost</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ordersLists.map((order) => (
                        <tr key={order} className="bg-white border-b text-slate-800 h-12">
                            <td>{order.fullname}</td>
                            <td>{order.address}</td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.products}</td>
                            <td>{order.costs}</td>
                            <td>09:21 pm - Aug 30th, 2023</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default OrdersList;
