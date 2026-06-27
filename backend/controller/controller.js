const axios = require("axios");

const getStock = async (req, res) => {
  try {
    const holdings = [
      { name: "TCS.BSE", qty: 1, avg: 3000 },
      { name: "INFY.BSE", qty: 2, avg: 1400 },
    ];

    const result = await Promise.all(
      holdings.map(async (item) => {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item.name}&apikey=D5RJCTV5FB3OFRT4`
        );

        const data = response.data["Global Quote"];

        // ✅ safe check
        if (!data || !data["05. price"]) {
          return {
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: "N/A",
            net: "N/A",
            day: "N/A",
          };
        }

        const price = parseFloat(data["05. price"]);
        const net = ((price - item.avg) / item.avg) * 100;

        return {
          name: item.name,
          qty: item.qty,
          avg: item.avg,
          price: price.toFixed(2),
          net: net.toFixed(2) + "%",
          day: data["10. change percent"],
        };
      })
    );

    res.json(result); // ✅ yahin return karo

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getStock };