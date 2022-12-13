import '@styles/tailwind.css'
import '@styles/global.css'
import MainLayout from '@components/common/MainLayout'

function MyApp({ Component, pageProps }) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
