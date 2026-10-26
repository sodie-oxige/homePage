import Button from "../component/Button";
import ImageCard from "../component/ImageCard";
import NicoIcon from "../assets/sns/niconico_nc296561.png";
import DownloadButton from "../component/DownloadButton";

const IllustGlob = import.meta.glob<{ default: string }>(
  "../assets/illust/*.{png,jpg,jpeg,svg,gif}",
  { eager: true },
);
const MinIllustGlob = import.meta.glob<{ default: string }>(
  "../assets/illust/min/*.webp",
  { eager: true },
);
const Illusts: Record<string, string> = toImagePaths(IllustGlob);
const MinIllusts: Record<string, string> = toImagePaths(MinIllustGlob);

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

function Assets() {
  const handleClickLinkButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string,
  ) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className="w-full">
      <span className="font-goldman block translate-y-2 text-xl">
        ASSETS - SOFTWARETALK
      </span>
      <div className="flex w-full flex-col gap-4 border p-4 md:p-8">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-1 flex-col items-center justify-center">
            <ImageCard
              src={Illusts["2023-07_夜語トバリ01"]}
              thumbnailSrc={MinIllusts["2023-07_夜語トバリ01"]}
              title="夜語トバリの全身立ち絵配布～～！"
              subtitle="vocaloid/voiceloid"
              text="ニコライ氏の世界一周旅行、毎日違う服装のトバキリみれて幸せだね"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl">夜語トバリの全身立ち絵配布～～！</h2>
            <div className="flex justify-end">
              <Button
                className="flex items-center bg-white py-0 text-[#252525]"
                onClick={(e) =>
                  handleClickLinkButton(
                    e,
                    "https://seiga.nicovideo.jp/seiga/im11222375",
                  )
                }
              >
                <img src={NicoIcon} alt="ニコニコ静画" className="w-10" />
                <span className="pr-2">2023.07.01</span>
              </Button>
            </div>
            <p className="my-4">
              夜語トバリの立ち絵素材。 ダウンロードはこちら（↓）から
            </p>
            <DownloadButton
              owner="sodie-oxige"
              repo="homePage"
              tag="yogatari01-1.1"
            >
              psd Download
            </DownloadButton>
            <p className="my-4">
              ニコライ氏の世界一周旅行、毎日違う服装のトバキリみれて幸せだね全部描こうとしたバカは誰だい？俺ｪ！！（2枚で挫折）
              <br />
              というわけで旅装が二枚ほど差分として入っています。よろしく。
              <br />
              紹介画像のセンスがないは禁句よ。
              <br />
              本素材は夜語トバリの利用規約を守って利用しましょ。
              <br />
              <a
                className="text-blue-500 underline"
                href="https://yogataritobari.studio.site"
                target="_blank"
              >
                https://yogataritobari.studio.site
              </a>
              <br />
              御大将ニコライ氏と氏の旅行動画イラスト描いてるもめん氏に感謝を込めて。
            </p>
            <p>
              【更新履歴】
              <dt className="font-bold">2023.07.02</dt>
              <dd className="pl-4">職員証忘れてたわ修正済み</dd>
              <dt className="font-bold">2023.07.01</dt>
              <dd className="pl-4">立ち絵公開</dd>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-1 flex-col items-center justify-center">
            <ImageCard
              src={Illusts["2022-02_結月ゆかり02"]}
              thumbnailSrc={MinIllusts["2022-02_結月ゆかり02"]}
              title="かっこいい系結月ゆかり立ち絵素材"
              subtitle="vocaloid/voiceloid"
              text="かっこいい系を目指した立ち絵でございます。クール系を不敵に笑わせたいし赤面させたかった。\nまた君達がそう望めば、脱ぐことだってできるのさ……！"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl">
              かっこいい系結月ゆかり立ち絵素材（v1.1）
            </h2>
            <div className="flex justify-end">
              <Button
                className="flex items-center bg-white py-0 text-[#252525]"
                onClick={(e) =>
                  handleClickLinkButton(
                    e,
                    "https://seiga.nicovideo.jp/seiga/im10901604",
                  )
                }
              >
                <img src={NicoIcon} alt="ニコニコ静画" className="w-10" />
                <span className="pr-2">2022.02.14</span>
              </Button>
            </div>
            <p className="my-4">
              かっこいい系を目指した立ち絵でございます。クール系を不敵に笑わせたいし赤面させたかった。また君達がそう望めば、脱ぐことだってできるのさ……！
              <br />
              服装差分は希望があるかテンション上がったら作るかもしれない。
              <br />
              <br />
              DLはこちら（↓）から。
            </p>
            <DownloadButton
              owner="sodie-oxige"
              repo="homePage"
              tag="yuduki02-1.1"
            >
              psd Download
            </DownloadButton>
            <p className="my-4">
              ファイルはpsd形式。psdtoolも対応しております。
              <br />
              ミス報告や差分要望はTwitter（@sodie_oxige）にDMか@メンションでも飛ばして頂戴。
            </p>
            <p>
              【更新履歴】
              <dt className="font-bold">2022.02.21</dt>
              <dd className="pl-4">
                「口：*軽い開口」,「口：*さらに軽い開口」,「口：*おー」,「眼：*ぽかん」を追加、「口：*あー」が二つあったため片方を「口：*あんぐり」に改名、既存レイヤーの微修正、PSDtoolkit用anmファイルを追加
              </dd>
              <dt className="font-bold">2022.02.14</dt>
              <dd className="pl-4">立ち絵公開</dd>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-1 flex-col items-center justify-center">
            <ImageCard
              src={Illusts["2021-09_結月ゆかり01"]}
              thumbnailSrc={MinIllusts["2021-09_結月ゆかり01"]}
              title="知らない衣装の結月ゆかりさん立ち絵"
              subtitle="vocaloid/voiceloid"
              text="描いた側も何をイメージしたのかは分からないゆかりさんの立ち絵。\nアイドルっぽさもあるかも……？"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl">
              知らない衣装の結月ゆかりさん立ち絵
            </h2>
            <div className="flex justify-end">
              <Button
                className="flex items-center bg-white py-0 text-[#252525]"
                onClick={(e) =>
                  handleClickLinkButton(
                    e,
                    "https://seiga.nicovideo.jp/seiga/im10813033",
                  )
                }
              >
                <img src={NicoIcon} alt="ニコニコ静画" className="w-10" />
                <span className="pr-2">2021.09.14</span>
              </Button>
            </div>
            <p className="my-4">
              描いた側も何をイメージしたのかは分からないゆかりさんの立ち絵。
              <br />
              アイドルっぽさもあるかも……？
              <br />
              <br />
              DLはこちら（↓）から。
            </p>
            <DownloadButton
              owner="sodie-oxige"
              repo="homePage"
              tag="yuduki01-1.0"
            >
              psd Download
            </DownloadButton>
            <p className="my-4">
              ファイルはpsd形式。psdtoolも対応しております。
              <br />
              素材に手を加えたい人はレイヤー非統合のzipもあるので好きにしてどうぞ。
              <br />
              <br />
              ミス報告とか差分要望とかとか、あればTwitter（@sodie_oxige）にDMかメンションでも飛ばして頂戴。お題箱（
              <a
                href="https://odaibako.net/u/sodie_oxige"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://odaibako.net/u/sodie_oxige
              </a>
              ）でも良いのよ。
              <br />
              …………というか差分少ないから案、頂戴？
            </p>
            <p className="my-4 text-xs">
              上をニコニコ静画から転記していて、まだ自分のお題箱があることに気がついた。ほえ～
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
