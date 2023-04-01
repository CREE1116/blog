import { useTheme } from "next-themes";
import Image from "next/image";

const Togglebtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // 클릭시 다크모드면 라이트로 바꿈
      className={`mr-3 animate-pulse`}
    >
      {theme === "light" ? (
        <Image
          src={`/on.png`}
          alt={""}
          width={30}
          height={30}
          className={`rounded-3xl hover:cursor-pointer`}
        />
      ) : (
        <Image
          src={`/off.png`}
          alt={""}
          width={30}
          height={30}
          className={`rounded-3xl hover:cursor-pointer`}
        />
      )}
    </button>
  );
};
export default Togglebtn;
