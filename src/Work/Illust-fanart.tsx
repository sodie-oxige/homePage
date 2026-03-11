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
        ILLUSTLATION - FANART
      </span>
      <GridContainer className="flex w-full flex-col gap-8 border p-4 md:px-12 md:py-8">
        <ImageCard
          src={Illusts["2025-12_結月ゆかり"]}
          title="結月ゆかり"
          subtitle="vocaloid/voiceloid"
          text="羽賀氏の合成音声イラスト集『synthetic singers!』に寄稿したイラストです。"
        />
        <ImageCard
          src={Illusts["2025-12_結月ゆかり2"]}
          title="結月ゆかり"
          subtitle="vocaloid/voiceloid"
          text="羽賀氏の合成音声イラスト集『synthetic singers!』に寄稿したイラストです。"
        />
        <ImageCard
          src={Illusts["2025-12_ハイモア"]}
          title="ハイモア"
          subtitle="アークナイツ"
          text="浅井ガミ氏のアークナイツイラスト集『Azure』に寄稿したイラストです。"
        />
        <ImageCard
          src={Illusts["2025-12_ミュルジス"]}
          title="ミュルジス"
          subtitle="アークナイツ"
          text="よか氏のアークナイツイラスト集『THERMO』に寄稿したイラストです。"
        />
      </GridContainer>
    </div>
  );
}

export default Illust;
