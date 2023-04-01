import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const Comment = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-t-[100px] border-transparent">
      <Giscus
        id="comments"
        repo="CREE1116/forgiscus"
        repoId="R_kgDOJQlcmA"
        category="General"
        categoryId="DIC_kwDOJQlcmM4CVatO"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "light" ? "light" : "dark_dimmed"}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};
export default Comment;
