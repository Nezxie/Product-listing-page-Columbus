const CURRENCY = "EUR"
const LOCALE = "en-US"

export function formatCurrency(price:number){
    return new Intl.NumberFormat(LOCALE, {
        style: "currency",
        currency: CURRENCY,
    }).format(price/100)
}

export function getDiscountedPrice(price:number, percentage:number){
    return price - (price * percentage/100);
}