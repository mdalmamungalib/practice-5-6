import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setProducts(data.data);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          toast.success(data.message);
          setRefresh(!refresh);
        }
      });
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product?.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.img}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    Name: {product.name}
                  </span>
                </td>
                <td>Price: ${product.price}</td>
                <th>
                  <details className="dropdown">
                    <summary className="m-1 btn">
                      Click Me
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li
                        onClick={() => handleEdit(product._id)}>
                        <a>Edit</a>
                      </li>
                      <li
                        onClick={() =>
                          handleDelete(product._id)
                        }>
                        <a>Delete</a>
                      </li>
                    </ul>
                  </details>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
