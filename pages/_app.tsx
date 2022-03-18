import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CookieConsent from 'react-cookie-consent'
import { LogoHeader } from '@/components/LogoHeader'
import { Footer } from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="content">
        <LogoHeader />
        <main>
          <Component {...pageProps} />
        </main>
        <div className="spacer"></div>
      </div>
      <Footer />
      <CookieConsent
        buttonText="Okej det går väl bra"
        cookieName="frilansareSverigeKanAnvandaAnalyticsDetGarBra"
      >
        Vi använder cookies för att se hur många besökare det kommer till denna
        sida.
      </CookieConsent>
    </>
  )
}

export default MyApp
