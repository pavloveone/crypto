
export const checkReponse = res => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const filterCathegory = (cathegory, array) => {
    switch(true) {
        case cathegory === 'Наличные':
            return !array ? [] : array.filter(item => item.code.includes('CASH'))
        case cathegory === 'Криптовалюты':
            return !array ? [] : array.filter(item => item.code.includes('BTC') || item.code.includes('ETH') || item.code.includes('USDTTRC'))
        case cathegory === 'Банки RUB':
            return !array ? [] : array.filter(item => item.name.includes('Альфа') || item.name.includes('Сбер') || item.name.includes('Тинькофф'))
        case cathegory === 'Банки UAH':
            return !array ? [] : array.filter(item => item.name.includes('банк UAH') )
        default:
            return array
    }
}