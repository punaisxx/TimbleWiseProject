
import productsData from '../product/product_list';

export default function Product() {
        return (
                <div className="product-container">
                        {productsData.map((product) => (
                                <div className="product-wrapped" key={product.id}>
                                        <div className="product-image">
                                                <img src={product.image} alt={product.name} style={{ borderRadius: '8px' }}/>
                                        </div>
                                        <div className='product-name-price' style={{ backgroundColor: '#F5F7FA', borderRadius: '8px', padding: '8px' }}>
                                                <h2 style={{ backgroundColor: '#F5F7FA'}}>{product.name}</h2>
                                                <h3 style={{ backgroundColor: '#F5F7FA'}}>${product.price}</h3>
                                                <a href={`/product/${product.id}`} className='next-button'>More</a>
                                        </div>
                                </div>
                        ))}                       
                </div>
        )
}