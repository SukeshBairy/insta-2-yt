import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0-q-VzRisHM1AXVmlnJQrmRNXJErEw9OdQ&usqp=CAU" />
      </Head>

      <Header />
      
      <Feed />
    </div>
  )
}
