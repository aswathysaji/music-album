import { css } from "../../../../styled-system/css";

type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <section
      className={css({ py: "20px", px: "24px", backgroundColor: "#FFFFFF" })}
    >
      <h1
        className={css({
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "28px",
          color:'#29313A',
        })}
      >
        {title}
      </h1>
    </section>
  );
};
