import { useState } from "react";

import Icon from "./assets/icon.png";
import HiddenLabelButton from "./component/HiddenLabelButton";
import ThreeDimensional from "./Work/3DCG";
import IllustFanart from "./Work/Illust-fanart";
import IllustOriginal from "./Work/Illust-original";

const SnsIconsGlob = import.meta.glob<{ default: string }>(
  "./assets/sns/*.{png,jpg,jpeg,svg,gif}",
  { eager: true },
);
const SnsIcons: Record<string, string> = toImagePaths(SnsIconsGlob);

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
  const [articleIndex, setArticleIndex] = useState(0);

  return (
    <>
      <title>袖置き場 - Home</title>
      <div className="flex justify-center border-b">
        <h1 className="text-bold my-12 px-4 text-center text-3xl">袖置き場</h1>
      </div>

      <div className="mx-auto flex flex-col items-center gap-8 py-8 md:w-4/5">
        <div className="w-full">
          <span className="font-goldman block translate-y-2 text-xl">
            PROFILE
          </span>
          <div className="flex w-full flex-col border p-4 md:p-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Icon}
                  className="aspect-square max-h-36 overflow-hidden rounded-lg shadow-lg"
                />
              </div>
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

        <div className="font-goldman flex flex-col gap-4 underline">
          <MarkedElement isMarked={articleIndex == 0}>
            <span onClick={() => setArticleIndex(0)} className="text-2xl">
              WORK
            </span>
          </MarkedElement>
          <div className="ml-4 flex gap-12 text-lg">
            <MarkedElement isMarked={articleIndex == 1}>
              <span onClick={() => setArticleIndex(1)}>ILLUSTLATION</span>
            </MarkedElement>
            <MarkedElement isMarked={articleIndex == 2}>
              <span onClick={() => setArticleIndex(2)}>3D MODEL</span>
            </MarkedElement>
          </div>
        </div>

        {[0, 1].includes(articleIndex) && <IllustOriginal />}
        {[0, 1].includes(articleIndex) && <IllustFanart />}
        {[0, 2].includes(articleIndex) && <ThreeDimensional />}
      </div>
    </>
  );
}

function MarkedElement({
  children,
  isMarked,
}: {
  children: React.ReactElement;
  isMarked: boolean;
}) {
  return (
    <div className="relative">
      {children}
      {isMarked && (
        <div className="absolute top-0 bottom-0 -left-3 flex items-center">
          <div className="border-y-3 border-l-6 border-x-black border-y-transparent"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
