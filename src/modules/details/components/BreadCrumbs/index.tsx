import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowRight from "../../../../../public/icons/ArrowRight";
import { useCollectionDetails } from "../../hooks/use-collection-details";
export const BreadCrumbs = () => {
  const { collectionName } = useCollectionDetails();
  if (!collectionName) return;
  const breadcrumbs = [
    <Typography
      key="1"
      sx={{
        color: "#677A90",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "20px",
        py: "6px",
      }}
      color="inherit"
    >
      Overview
    </Typography>,
    <Typography
      key="2"
      sx={{
        color: "#29313A",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "20px",
        py: "6px",
      }}
    >
      {collectionName}
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowRight fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          p: "4px 24px",
          backgroundColor: "#F5F8FA",
          "& .MuiBreadcrumbs-separator": {
            mx: "4px",
          },
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
