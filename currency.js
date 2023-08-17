class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_N2Vk794rxExacp697JPyZwp3BwNKW9s8zjrq7QIT&base_currency="
    }
  async  exchange(amount, firstCurrency, secondCurrency){
       const response = await fetch(`${this.url}${firstCurrency}`);
       const resultData = await response.json();
       const result = (amount * resultData.data[secondCurrency]) 
       
       return result;
    }
}