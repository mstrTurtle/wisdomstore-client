import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Category from '../components/categories';
import NewBooks from '../components/newbooks';
import NavBar from '../components/nav';

export default function FirstPost() {
  return( <div>
    <NavBar></NavBar>
    <Layout>
      <Head>
        <title>传智商城 - 新品上线</title>
      </Head>
      
      <h1>新品上线</h1>
      <h2>
        <Link href="/">← 返回主页</Link>
      </h2>
      
      <NewBooks></NewBooks>
        <Category></Category>
    </Layout>
    </div>
  );
}