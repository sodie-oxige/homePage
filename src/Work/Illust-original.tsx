import GridContainer from "../component/GridContainer";
import ImageCard from "../component/ImageCard";

const IllustGlob = import.meta.glob<{ default: string }>(
  "../assets/illust/*.{png,jpg,jpeg,svg,gif}",
  { eager: true },
);
const Illusts: Record<string, string> = toImagePaths(IllustGlob);

function toImagePaths(glob: Record<string, { default: string }>) {
  const res: Record<string, string> = {};
  Object.keys(glob).forEach((key) => {
    const fileName = key.split("/").pop()?.split(".")[0];
    if (fileName) {
      res[fileName] = glob[key].default;
    }
  });
  return res;
}

function Illust() {
  return (
    <div className="w-full">
      <span className="font-goldman block translate-y-2 text-xl">
        ILLUSTLATION - ORIGINAL
      </span>
      <GridContainer className="w-full border p-2 md:px-12 md:py-8">
        <ImageCard
          src={Illusts["2026-03_キラキラアイドル"]}
          title="キラキラアイドル"
          text="お題より。「きゃぴきゃぴ見てみたい」"
        />
        <ImageCard
          src={Illusts["2026-03_六原廻"]}
          title="六原廻"
          text="TRPGオリジナルシナリオ『ずっと真夜中で、いいのに』用立ち絵"
        />
        <ImageCard
          src={Illusts["2026-02_美影ライム(冬服)"]}
          title="美影ライム(冬服)"
          text="TRPG用立ち絵"
        />
        <ImageCard
          src={Illusts["2026-01_アントー(振袖)"]}
          title="アントー(振袖)"
          text="あけましておめでとう"
        />
      </GridContainer>
    </div>
  );
}

export default Illust;
