import { useRouteError } from "react-router-dom";
import { Typography } from "@mui/material";
export default function ErrorPage() {
  const error = useRouteError();
  console.log("error in error page ", error);
   return (
    <Typography
      sx={{
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ display: "inline-flex", mb: 3 }}>
        <img
          src={require(`../../assets/image/11329116.png`)}
          alt="Something went wrong"
          width={380}
        />
      </Typography>
      <Typography align="center" color="grey" variant="h6" mb={3}>
        Something went wrong ,please check your console
      </Typography>
    </Typography>
  );
}
