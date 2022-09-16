import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import { Logo } from '../Components/Logo'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
