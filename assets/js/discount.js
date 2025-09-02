function discount() {
    let price = parseFloat(document.getElementById("price").value);
    let discount = parseFloat(document.getElementById("discount").value);

    if (isNaN(price) || isNaN(discount)) {
      alert("Please enter valid numbers for price and discount.");
      return;
    }

    let discountValue = (price * discount) / 100;
    let totalValue = price - discountValue;

    document.getElementById("total").value = totalValue.toFixed(2);
  }

  function clearFields() {
    document.getElementById("price").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("total").value = "";
    document.getElementById("price").focus();
  }