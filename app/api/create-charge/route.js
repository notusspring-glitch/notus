import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, description, amount, currency, customerEmail } = body

    const response = await fetch('https://api.commerce.coinbase.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY,
        'X-CC-Version': '2018-03-22',
      },
      body: JSON.stringify({
        name,
        description,
        pricing_type: 'fixed_price',
        local_price: { amount, currency },
        metadata: { customer_email: customerEmail },
        redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmed?method=crypto`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status })
    }

    return NextResponse.json(data.data)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
