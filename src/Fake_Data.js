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
      borderColor: "rgb(75,192,192)"
    },
    {
      label: 'Sadia',
      data: [2500,4000,4100,500,7000,7500,8500],
      borderColor: "teal"
    }
  ]
}

export const barChartData = {
  labels : ['Rent', 'Groceries', 'Utilities','Entertainment','Transportation'],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300,150,180,100],
      backgroundColor: ["rgba(255,99,132,0.2)"],
      borderColor: ["rgba(54,162,235,1)"],
      borderWidth: 1,
    }
  ]
}