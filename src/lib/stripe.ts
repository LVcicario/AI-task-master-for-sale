import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export { stripePromise };

// Stripe price IDs (Replace with your actual price IDs from Stripe Dashboard)
export const STRIPE_PRICES = {
  PRO_MONTHLY: 'price_1234567890abcdefghijklmn',
  PRO_YEARLY: 'price_1234567890abcdefghijklmo',
  ENTERPRISE_MONTHLY: 'price_1234567890abcdefghijklmp',
  ENTERPRISE_YEARLY: 'price_1234567890abcdefghijklmq',
};

// Create checkout session
export const createCheckoutSession = async (priceId: string, customerEmail?: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        customerEmail,
      }),
    });

    const session = await response.json();
    
    if (session.error) {
      throw new Error(session.error);
    }

    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};