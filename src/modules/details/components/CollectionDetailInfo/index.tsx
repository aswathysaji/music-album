import { css } from "../../../../../styled-system/css";
import {
  formatDateTime,
  formatDuration,
  formatFileSize,
  formatDurationToWord,
  formatDate,
} from "../../../../../utils";
import { useCollectionDetails } from "../../hooks/use-collection-details";

export const CollectionDetailInfo = () => {
  const { collection } = useCollectionDetails();
  if (!collection) return;
  const collectionDetailInfo = [
    { title: "Artist", answer: collection.artist },
    { title: "Type", answer: collection.type },
    { title: "Song Count", answer: collection.songCount },
    { title: "Total Size", answer: formatFileSize(collection.sizeInBytes) },
    {
      title: "Total Duration",
      answer: formatDurationToWord(
        formatDuration(collection.durationInSeconds)
      ),
    },
    {
      title: "Released On",
      answer: formatDate(formatDateTime(collection.releasedOn)),
    },
  ];
  return (
    <div
      className={css({
        py: "12px",
        px: "24px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        height: "fit",
        borderRadius: "8px",
      })}
    >
      {collectionDetailInfo.map((detail) => (
        <div key={detail.answer} className={css({width:'160px'})}>
          <p
            className={css({
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#2D3540",
            })}
          >
            {detail.title}
          </p>
          <p
            className={css({
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#2D3540",
            })}
          >
            {detail.answer}
          </p>
        </div>
      ))}
    </div>
  );
};
