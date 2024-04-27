import Header from '../components/Header';
import Product from '../components/Product';

export default function category() {
        return (
                <main>
                        <Header />
                        <div className="nvg" style={{ marginTop: '70px' }}>Web Application Name {'>'} Category</div>
                        <div className="topic">Category</div>
                        <Product />
                        
                </main>

        )
}