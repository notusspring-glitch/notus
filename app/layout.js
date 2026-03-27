import './globals.css'

export const metadata = {
  title: 'UglyCute Studio — So Ugly. So Lovable.',
  description: 'Discover the most wonderfully weird plush toys on the internet. Monster plushies, cockroach besties, and more ugly-cute friends waiting to be adopted.',
  keywords: 'ugly cute plush, monster plush toy, funny stuffed animal, weird toys, gag gift, fuggler',
  openGraph: {
    title: 'UglyCute Studio — So Ugly. So Lovable.',
    description: 'Discover the most wonderfully weird plush toys. Adopt a monster today!',
    url: 'https://uglycutestudio.vercel.app',
    siteName: 'UglyCute Studio',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0818/7455/1028/files/A446f43033244407db8ef13bd641ad1a9b.webp',
        width: 1920,
        height: 1080,
        alt: 'UglyCute Studio — So Ugly. So Lovable.',
      },
    ],
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
      <body>{children}</body>
    </html>
  )
}
