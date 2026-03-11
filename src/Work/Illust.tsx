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
        ILLUSTLATION
      </span>
      <div className="flex w-full flex-col gap-8 border p-4 md:px-12 md:py-8">
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
          <img
            src={Illusts["2025-12_結月ゆかり"]}
            className="max-h-[70vh] rounded-xl shadow-lg"
          />
          <div className="m-4 flex-1 md:mx-12 md:my-8">
            <h2 className="mb-4 text-2xl font-bold">
              結月ゆかり
              <span className="text-xs"> - vocaloid/voiceloid</span>
            </h2>
            <p>
              羽賀氏の合成音声イラスト集『synthetic
              singers!』に寄稿したイラストです。
            </p>
          </div>
        </div>
        <hr />

        <div className="flex w-full flex-row-reverse flex-wrap items-center justify-center">
          <img
            src={Illusts["2025-12_結月ゆかり2"]}
            className="max-h-[70vh] rounded-xl shadow-lg"
          />
          <div className="m-4 flex-1 md:mx-12 md:my-8">
            <h2 className="mb-4 text-2xl font-bold">
              結月ゆかり
              <span className="text-xs"> - vocaloid/voiceloid</span>
            </h2>
            <p>
              羽賀氏の合成音声イラスト集『synthetic
              singers!』に寄稿したイラストです。
            </p>
          </div>
        </div>
        <hr />

        <div className="flex w-full flex-row flex-wrap items-center justify-center">
          <img
            src={Illusts["2025-12_ハイモア"]}
            className="max-h-[70vh] rounded-xl shadow-lg"
          />
          <div className="m-4 flex-1 md:mx-12 md:my-8">
            <h2 className="mb-4 text-2xl font-bold">
              ハイモア
              <span className="text-xs"> - アークナイツ</span>
            </h2>
            <p>
              浅井ガミ氏のアークナイツイラスト集『Azure』に寄稿したイラストです。
            </p>
          </div>
        </div>
        <hr />

        <div className="flex w-full flex-row-reverse flex-wrap items-center justify-center">
          <img
            src={Illusts["2025-12_ミュルジス"]}
            className="max-h-[70vh] rounded-xl shadow-lg"
          />
          <div className="m-4 flex-1 md:mx-12 md:my-8">
            <h2 className="mb-4 text-2xl font-bold">
              ミュルジス
              <span className="text-xs"> - アークナイツ</span>
            </h2>
            <p>
              よか氏のアークナイツイラスト集『THERMO』に寄稿したイラストです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illust;
