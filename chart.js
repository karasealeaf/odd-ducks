const ctx = document.getElementById("myChart");
const config = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jurassic Park",
      "Life of Brian",
      "Galaxy Quest",
      "Lord of the Rings",
      "Chicken Run",
    ],
    datasets: [
      {
        label: "# of votes",
        data: [5, 10, 3, 9, 8.9],
        borderWidth: 6,
        backgroundColor: ["red", "#cdaa7f", "skyblue", "green", "orange"],
      },
    ],
  },
});
