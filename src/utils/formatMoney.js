export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  if (amount % 100 === 0) options.minimumFractionDigits = 0;

  // Intl in javascript
  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
}
