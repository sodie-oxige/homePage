import Icon from "./assets/icon.png";
import HiddenLabelButton from "./component/HiddenLabelButton";

const SnsIconsGlob = import.meta.glob<{ default: string }>(
  "./assets/sns/*.{png,jpg,jpeg,svg,gif}",
  { eager: true },
);
const SnsIcons: Record<string, string> = toImagePaths(SnsIconsGlob);

const IllustGlob = import.meta.glob<{ default: string }>(
  "./assets/illust/*.{png,jpg,jpeg,svg,gif}",
  { eager: true },
);
const Illust: Record<string, string> = toImagePaths(IllustGlob);

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

function Home() {
  return (
    <>
      <title>袖置き場 - Home</title>
      <div className="flex justify-center border-b">
        <h1 className="text-bold my-12 px-4 text-center text-3xl">袖置き場</h1>
      </div>

      <div className="mx-auto flex w-4/5 flex-col items-center gap-8 py-8">
        <div className="w-full">
          <span className="font-goldman block translate-y-2 text-xl">
            PROFILE
          </span>
          <div className="flex w-full flex-col border p-8">
            <div className="flex">
              <img
                src={Icon}
                className="mr-6 aspect-square h-36 overflow-hidden rounded-lg shadow-lg"
              />
              <div>
                <h2 className="mb-4 text-2xl">袖置</h2>
                <p>
                  絵を描きます。
                  <br />
                  TRPGとVRChatが最近の趣味です。
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <h2 className="font-goldman mb-1 text-lg">Link</h2>
              <div className="flex gap-3 pl-2">
                <HiddenLabelButton
                  label="X.com"
                  onClick={() => {
                    location.href = "https://x.com/sodie_oxige";
                  }}
                >
                  <div className="flex aspect-square h-8 cursor-pointer items-center justify-center rounded-lg bg-black">
                    <img src={SnsIcons.x} className="m-auto h-5" />
                  </div>
                </HiddenLabelButton>
                <HiddenLabelButton
                  label="Bluesky"
                  onClick={() => {
                    location.href =
                      "https://bsky.app/profile/sodie-oxige.bsky.social";
                  }}
                >
                  <div className="flex aspect-square h-8 items-center justify-center">
                    <img src={SnsIcons.bluesky} className="h-6 object-cover" />
                  </div>
                </HiddenLabelButton>
                <HiddenLabelButton
                  label="misskey"
                  onClick={() => {
                    location.href = "https://misskey.io/@sodieoxige";
                  }}
                >
                  <div className="flex aspect-square h-8 items-center justify-center">
                    <img src={SnsIcons.misskey} className="h-11 object-cover" />
                  </div>
                </HiddenLabelButton>
                <HiddenLabelButton
                  label="BOOTH"
                  onClick={() => {
                    location.href = "https://sodie-oxige.booth.pm/";
                  }}
                >
                  <img src={SnsIcons.booth} className="h-8" />
                </HiddenLabelButton>
                <HiddenLabelButton
                  label="Skeb"
                  onClick={() => {
                    location.href = "https://skeb.jp/@sodie_oxige";
                  }}
                >
                  <img src={SnsIcons.skeb} className="h-8" />
                </HiddenLabelButton>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <span className="font-goldman block translate-y-2 text-xl">
            ILLUSTLATION
          </span>
          <div className="flex w-full flex-col gap-8 border px-12 py-8">
            <div className="flex w-full items-center">
              <img
                src={Illust["2025-12_結月ゆかり"]}
                className="h-[70vh] rounded-xl shadow-lg"
              />
              <div className="mx-12 flex-1">
                <h2 className="mb-4 text-2xl font-bold">
                  結月ゆかり
                  <span className="text-xs"> - vocaloid/voiceloid</span>
                </h2>
                <p>
                  羽賀様の合成音声イラスト集『synthetic
                  singers!』に寄稿したイラストです。
                </p>
              </div>
            </div>
            <hr />

            <div className="flex w-full items-center">
              <div className="mx-12 flex-1">
                <h2 className="mb-4 text-2xl font-bold">
                  結月ゆかり
                  <span className="text-xs"> - vocaloid/voiceloid</span>
                </h2>
                <p>
                  羽賀様の合成音声イラスト集『synthetic
                  singers!』に寄稿したイラストです。
                </p>
              </div>
              <img
                src={Illust["2025-12_結月ゆかり2"]}
                className="h-[70vh] rounded-xl shadow-lg"
              />
            </div>
            <hr />

            <div className="flex w-full items-center">
              <img
                src={Illust["2025-12_ハイモア"]}
                className="h-[70vh] rounded-xl shadow-lg"
              />
              <div className="mx-12 flex-1">
                <h2 className="mb-4 text-2xl font-bold">
                  ハイモア
                  <span className="text-xs"> - アークナイツ</span>
                </h2>
                <p>
                  浅井ガミ様のアークナイツイラスト集『Azure』に寄稿したイラストです。
                </p>
              </div>
            </div>
            <hr />

            <div className="flex w-full items-center">
              <div className="mx-12 flex-1">
                <h2 className="mb-4 text-2xl font-bold">
                  ミュルジス
                  <span className="text-xs"> - アークナイツ</span>
                </h2>
                <p>
                  よか様のアークナイツイラスト集『THERMO』に寄稿したイラストです。
                </p>
              </div>
              <img
                src={Illust["2025-12_ミュルジス"]}
                className="h-[70vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
