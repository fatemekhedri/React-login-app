import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export default function ErrorPage() {

  const error = useRouteError();
  console.log(
    "error in error page has",
    error,
    error.status,
    Object.values(error),

    typeof error
  );
//   if (isRouteErrorResponse(error)) {
//     if (error.status === 404) {
//       return <div>This page doesn't exist!</div>;
//     }

//     if (error.status === 401) {
//       return <div>You aren't authorized to see this</div>;
//     }

//     if (error.status === 503) {
//       return <div>Looks like our API is down</div>;
//     }

//     if (error.status === 418) {
//       return <div>🫖</div>;
//     }
//   }

  //return <div>Something went wrong </div>;
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
        {/* <img
          src={require(`../../assets/images/general/unauthorized.png`)}
          alt="401"
          width={380}
        /> */}
      </Typography>
      <Typography align="center" color="grey" variant="h6" mb={3}>
        خطایی رخ داده است لطفا کنسول خود را بررسی کنید
      </Typography>
    </Typography>
  );
}
