import WomenImage from "../assets/category/women.jpg"
import MenImage from "../assets/category/man.jpg"
import AccessoriesImage from "../assets/category/accessories.jpg"
import ProductImage1 from "../assets/product/product-1.jpg"

export const productCategoryData = [
    {
        id: 1,
        type: "Women",
        info: "Spring 2018",
        image: {
            src: WomenImage,
            alt: "Women-Image"
        }
    },
    {
        id: 2,
        type: "Men",
        info: "Spring 2018",
        image: {
            src: MenImage,
            alt: "Women-Image"
        }
    },
    {
        id: 3,
        type: "Accessories",
        info: "New Trend",
        image: {
            src: AccessoriesImage,
            alt: "Accessories-Image"
        }
    }
]

export const productData = {
    types: [
        {
            text: "All Products",
            isActive: true,
            id: 1
        }, 
        {
            text: "Women",
            isActive: false,
            id: 2
        }, 
        {
            text: "Men",
            isActive: false,
            id: 3
        },
        {
            text: "Bag",
            isActive: false,
            id: 4
        },
        {
            text: "Shoes",
            isActive: false,
            id: 5
        }, 
        {
            text: "Watches",
            isActive: false,
            id: 6
        }
    ],
    items: [
        {
            id: 1,
            type: "woman",
            price: "$16.64",
            isLiked: false,
            modelName: "Esprit Ruffle Shirt",
            image: {
                src: ProductImage1,
                alt: "Girl"
            }
        }
    ]
}