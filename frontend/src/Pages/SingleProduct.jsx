import { Badge, Button } from "@chakra-ui/react";
import Styles from "./Style/SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function SingleProduct() {
    const param = useParams();
    const [data, setData] = useState({});
    const singleProduct = async (id) => {
        try {
            const res = await axios
                .get(`http://localhost:4500/products/${id}`)
                .then((res) => console.log(res));
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        singleProduct(param.id);
    }, [param.id]);

    return (
        <div className={Styles.main}>
            <img
                style={{ border: "1px solid blue" }}
                // src={product.image}
                alt=""
                width={"45%"}
            />
            <div
                className="details"
                style={{ width: "45%", border: "1px solid green" }}>
                <div style={{}}>
                    <div style={{ margin: "auto" }}>
                        <h4 fw={500}></h4>
                        <h4 fz="xs" c="dimmed">
                            {/* {product.description} */}
                        </h4>
                    </div>
                    <Badge variant="outline" style={{ margin: "auto" }}>
                        {/* {product.discount}% off */}
                    </Badge>
                </div>

                <div>
                    <h4 fz="sm" c="dimmed">
                        Basic configuration
                    </h4>

                    <div>
                        <div spacing={30}>
                            <div>
                                <h4 fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                                    {/* ${product.price} */}
                                </h4>
                                <h4
                                    fz="sm"
                                    c="dimmed"
                                    fw={500}
                                    sx={{ lineHeight: 1 }}
                                    mt={3}>
                                    {/* per {product.unit} */}
                                </h4>
                            </div>

                            <Button radius="xl" style={{ flex: 1 }}>
                                Rent now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
