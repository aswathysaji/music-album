import { Header } from "../../../common/Header";
import { useCollectionDetails } from "../../hooks/use-collection-details";
export const CollectionTitleInfo = () => {
  const { collectionName } = useCollectionDetails();
  if (!collectionName) return;
  return (
    <Header title={collectionName}/>
  );
};
