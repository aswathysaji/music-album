import { Header } from "../src/modules/common/Header";
import DataTable from "../src/modules/landing/DataTable";
import { MusicCollectionFilters } from "../src/modules/landing/MusicCollectionFilters";
import { css } from "../styled-system/css";

export const Landing = () => {
  return (
    <>
      <Header title="Overview" />
      <main
        className={css({ px: "24px", py: "25px", backgroundColor: "#F5F8FA" })}
      >
        <MusicCollectionFilters />
        <DataTable/>
      </main>
    </>
  );
};
