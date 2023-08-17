import { deepPurple, pink, amber } from "@mui/material/colors";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import Grid from "@mui/material/Grid";
import { Box, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales
    ?.map((item) => Number(item.price_total))
    .reduce((acc, sale) => acc + sale, 0);

  const totalPurchases = purchases
    ?.map((item) => Number(item.price_total))
    .reduce((acc, sale) => acc + sale, 0);

  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      bgColor: deepPurple[700],
      color: deepPurple[100],
      title: "SALES",
      value: `${totalSales}`,
    },
    {
      id: 2,
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      bgColor: pink[700],
      color: pink[100],
      title: "Profit",
      value: `${totalSales - totalPurchases} `,
    },
    {
      id: 3,
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      bgColor: amber[700],
      color: amber[100],
      title: "Purchases",
      value: `${totalPurchases}`,
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {cardData.map((item) => (
        <Grid item key={item.id}>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              gap: 3,
              p: 3,
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            <Avatar
              sx={{
                bgcolor: item.bgColor,
                color: item.color,
                width: 70,
                height: 70,
              }}
            >
              {item.icon}
            </Avatar>
            <Box>
              <Typography variant="button" mb={2}>
                {item.title}
              </Typography>

              <Typography variant="h5" mb={2}>
                {item.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
