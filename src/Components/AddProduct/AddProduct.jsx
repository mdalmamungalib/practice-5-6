import { toast } from "react-hot-toast";

const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            img: event.target.img.value,
        }
        console.log(product)
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(result => result.json())
        .then(data => {
            if(data.success){
                toast.success(data.message)
            }
            else{
                toast.error(data.error)
            }
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Img URL</span>
                        </label>
                        <input type="text" placeholder="Img URL" name="img" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;