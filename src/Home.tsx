import Bluesky from "./assets/bluesky.svg";
import Booth from "./assets/booth.svg";
import Icon from "./assets/icon.png";
import Misskey from "./assets/misskey.png";
import Skeb from "./assets/skeb.svg";
import X from "./assets/x.svg";
import HiddenLabelButton from "./component/HiddenLabelButton";

function Home() {
  return (
    <>
      <title>袖置き場 - Home</title>
      <div className="flex justify-center border-b">
        <h1 className="text-bold my-12 px-4 text-center text-3xl">袖置き場</h1>
      </div>

      <div className="m-4 flex flex-col border p-8">
        <div className="flex">
          <div className="mr-6 aspect-square h-36 overflow-hidden rounded-lg">
            <img src={Icon} alt="icon" />
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
          <h2 className="mb-1 text-lg font-bold">Link</h2>
          <div className="flex gap-3 pl-2">
            <HiddenLabelButton
              label="X.com"
              onClick={() => {
                location.href = "https://x.com/sodie_oxige";
              }}
            >
              <div className="flex aspect-square h-8 cursor-pointer items-center justify-center rounded-lg bg-black">
                <img src={X} className="m-auto h-5" />
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
                <img src={Bluesky} className="h-6 object-cover" />
              </div>
            </HiddenLabelButton>
            <HiddenLabelButton
              label="misskey"
              onClick={() => {
                location.href = "https://misskey.io/@sodieoxige";
              }}
            >
              <div className="flex aspect-square h-8 items-center justify-center">
                <img src={Misskey} className="h-11 object-cover" />
              </div>
            </HiddenLabelButton>
            <HiddenLabelButton
              label="BOOTH"
              onClick={() => {
                location.href = "https://sodie-oxige.booth.pm/";
              }}
            >
              <img src={Booth} className="h-8" />
            </HiddenLabelButton>
            <HiddenLabelButton
              label="Skeb"
              onClick={() => {
                location.href = "https://skeb.jp/@sodie_oxige";
              }}
            >
              <img src={Skeb} className="h-8" />
            </HiddenLabelButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
