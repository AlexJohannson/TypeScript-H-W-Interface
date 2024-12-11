interface ICurrencyValue {
    currency: string;
    value: number;
}

interface IExchange {
    (sumUAH: number, currencyValues: ICurrencyValue[], exchangeCurrency: string): number;
}

const exchange: IExchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency: ICurrencyValue | undefined;
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
