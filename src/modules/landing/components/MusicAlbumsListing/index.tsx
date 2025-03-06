import { useEffect, useState } from "react";
import { css } from "../../../../../styled-system/css";
import { Header } from "../../../common/Header";
import { useCollectionsFetch } from "../../hooks/use-collections-list";
import DataTable from "../DataTable";
import { MusicCollectionFilters } from "../MusicCollectionFilters";
import { Collection } from "../../../../../schema";

export const MusicAlbumListing = () => {
  const { collections } = useCollectionsFetch();
  const [filteredCollections, setFilteredCollections] = useState<Collection[]>([]);
  useEffect(() => {
    if (collections?.length) {
      setFilteredCollections(collections);
    }
  }, [collections]);
  if (!collections) return null;
  return (
    <>
      <Header title="Overview" />
      <main
        className={css({
          px: "24px",
          py: "25px",
          backgroundColor: "#F5F8FA",
          height: "100%",
          flex: 1,
        })}
      >
        <MusicCollectionFilters
          collections={collections}
          setFilteredCollections={setFilteredCollections}
        />
        <DataTable collections={filteredCollections} />
      </main>
    </>
  );
};
