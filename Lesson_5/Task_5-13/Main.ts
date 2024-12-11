interface ICurrencyValue2 {
    currency: string;
    value: number;
}

interface IExchange2 {
    (sumUAH: number, currencyValues: ICurrencyValue2[], exchangeCurrency: string): number;
}

const exchange: IExchange2 = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency: ICurrencyValue2 | undefined;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
