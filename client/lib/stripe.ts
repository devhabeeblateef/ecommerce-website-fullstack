import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY){
    throw new Error
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-10-28.acacia' //Use the latest API version
})

export default stripe