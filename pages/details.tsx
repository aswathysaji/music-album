import CollectionDetailsTable from "../src/modules/details/components/CollectionDetailTable";
import { BreadCrumbs } from "../src/modules/details/components/BreadCrumbs";
import { CollectionTitleInfo } from "../src/modules/details/components/CollectionTitleInfo";
import { css } from "../styled-system/css";
import { CollectionDetailInfo } from "../src/modules/details/components/CollectionDetailInfo";
export const Details = () => {
  return (
    <>
      <BreadCrumbs />
      <CollectionTitleInfo />
      <main
        className={css({
          px: "24px",
          py: "25px",
          backgroundColor: "#F5F8FA",
          height: "100%",
          flex: 1,
          display:'flex',
          flexDirection:'column',
          gap:'24px',
        })}
      >
        <CollectionDetailInfo />
        <CollectionDetailsTable />
      </main>
    </>
  );
};
