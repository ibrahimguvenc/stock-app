import { Grid } from "@mui/material";
import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
    quantity: item.quantity,
  }));
  const purchaesData = purchases?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
  }));

  return (
    <Grid container mt={5} spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        {" "}
        <Card>
          <Title>Total Sales</Title>
          <LineChart
            className="mt-4"
            data={salesData}
            index="year"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <Card>
          <Title>Total Purchases</Title>
          <LineChart
            className="mt-4"
            data={purchaesData}
            index="year"
            categories={["price"]}
            colors={["green"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
