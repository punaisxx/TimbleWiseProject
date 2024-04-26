import Head from 'next/head';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow'
import Categories from '../components/Categories';

export default function Home() {

        return (
                <div>
                        {/* <Head>
                                <title>TimbleWise</title>
                        </Head> */}

                        <Header />
                        <div style={{ marginTop: '70px' }}></div>
                        <SlideShow />
                        <Categories />
                </div>
        );
}