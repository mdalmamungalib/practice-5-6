import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const [refresh, setRefresh] = useState(false)
    const router = useParams();
    const { id } = router;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    setProduct(data.data)
                }
                setRefresh(!refresh)
            })
            .catch(err => toast.error(err.massage))
    }, [refresh, id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            img: event.target.img.value
        };
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(result => result.json())
        .then(data => {
            if (data.data) {
                toast.success(data.massage)
            }
            else{
                toast.error(data.error)
            }
        })
        .catch(err => toast.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={product?.name} className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" defaultValue={product?.price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Img URL</span>
                        </label>
                        <input type="text" placeholder="Img URL" name="img" defaultValue={product?.img} className="input input-bordered" />
                        <img src={product?.img} className="w-20" alt="" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Edit Product</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EditProduct;