export default {
      storeTest: () => {
        let values =
          [
            storeValue('countryCode', CurrencyInput1.countryCode),
            storeValue('currencyCode', CurrencyInput1.currencyCode),
						storeValue('value', CurrencyInput1.value)
          ]
        return Promise.all(values)
          .then(() => {
            showAlert(JSON.stringify(appsmith.store))
        })
          .catch((err) => {
            return showAlert('Could not store values in store ' + err.toString());
          })
      }
    }