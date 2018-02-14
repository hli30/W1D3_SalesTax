var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  let outputObj = {};

  salesData.forEach(function(company) {
    let companySales = calculateSales(company.sales);
    let provinceRate = salesTaxRates[company.province];
    let companyTax = calculateTax(companySales, provinceRate)
    let companyName = company.name;

    if(!outputObj[companyName]) {
      outputObj[companyName] = {
        totalSales: companySales,
        totalTaxes: companyTax
      };
    }else {
      outputObj[companyName].totalSales += companySales;
      outputObj[companyName].totalTaxes += companyTax;
    }
  });
  return outputObj;
}

function calculateSales (salesArr) {
  let salesSum = 0;

  for(let i in salesArr) {
    salesSum += salesArr[i];
  }
  return salesSum;
}

function calculateTax (companySales, provinceRate) {
  let tax = 0;

  tax = companySales * provinceRate;

  return tax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
