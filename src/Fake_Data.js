export const lineChartData = {
  labels : [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [
    {
      label: 'Tanvir',
      data: [3000,5000,4500,6000,8000,7000,9000],
      backgroundColor: 'aqua',
      borderColor: '#00CA8D',
      pointBorderColor: 'aqua',
      tension: 0.2,
      pointRadius: 0,

    },
  ]
}

export const barChartData = {
  labels : ['Rent', 'Groceries', 'Utilities','Entertainment','Transportation'],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300,150,180,100],
      backgroundColor: ["rgba(255,99,132,0.2)", 'blue','green'],
      borderColor: ["rgba(54,162,235,1)", 'blue','green'],
      borderWidth: 1,
    }
  ]
}