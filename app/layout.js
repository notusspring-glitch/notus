import './globals.css'
import { CartProvider } from '../lib/cart'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export const metadata = {
  title: 'UglyCute Studio — So Ugly. So Lovable.',
  description: 'Discover the most wonderfully weird plush toys. Monster plushies, cockroach besties, and more ugly-cute friends waiting to be adopted.',
  keywords: 'ugly cute plush, monster plush toy, funny stuffed animal, weird toys, gag gift',
  openGraph: {
    title: 'UglyCute Studio — So Ugly. So Lovable.',
    description: 'Adopt a monster today!',
    url: 'https://notus-plum.vercel.app',
    siteName: 'UglyCute Studio',
    images: [{ url: 'https://cdn.shopify.com/s/files/1/0818/7455/1028/files/A446f43033244407db8ef13bd641ad1a9b.webp', width: 1920, height: 1080 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UglyCute Studio — So Ugly. So Lovable.',
    description: 'Adopt a monster today. Free shipping over $35!',
    images: ['https://cdn.shopify.com/s/files/1/0818/7455/1028/files/A446f43033244407db8ef13bd641ad1a9b.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PayPalScriptProvider options={{
          'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: 'USD',
          intent: 'capture',
        }}>
          <CartProvider>
            {children}
          </CartProvider>
        </PayPalScriptProvider>
      </body>
    </html>
  )
}
