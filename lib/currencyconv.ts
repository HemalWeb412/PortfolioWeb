const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { style:'currency', currency:'INR',maximumFractionDigits:0})
export function CurrencySymbol(price:number){
    return CURRENCY_FORMATTER.format(price);
}