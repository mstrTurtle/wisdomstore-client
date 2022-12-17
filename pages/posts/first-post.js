import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Category from '../../components/categories';
import NewBooks from '../../components/newbooks';
import SearchBar from '../../components/searchbar';
import Cart from '../../components/cart';
import OrderPending from '../../components/order/pending';
import OrderDelivering from '../../components/order/delivering';
import OrderCompleted from '../../components/order/completed';
import Detail from '../../components/detail';
import SearchResults from '../../components/searchresults';
import NavBar from '../../components/nav';
import { Counter } from '../../components/counter';

export default function FirstPost() {
  return( <div>
    <NavBar></NavBar>
    <Layout>
      <Head>
        <title>Springer - Books</title>
      </Head>
      
      <h1>Springer Books</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <Category></Category>
      <NewBooks></NewBooks>
      <SearchBar></SearchBar>
      <Cart></Cart>
      <OrderPending></OrderPending>
      <OrderDelivering></OrderDelivering>
      <OrderCompleted></OrderCompleted>
      <Detail></Detail>
      <SearchResults></SearchResults>
      <Counter></Counter>
    </Layout>
    </div>
  );
}