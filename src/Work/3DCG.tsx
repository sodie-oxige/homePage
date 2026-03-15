import AntooThumbnail from "../assets/image/Antoo-thumbnail01.png";

function ThreeDimensional() {
  return (
    <div className="w-full">
      <span className="font-goldman block translate-y-2 text-xl">3D MODEL</span>
      <div className="flex w-full flex-col gap-8 border p-4 md:px-12 md:py-8">
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
          <img
            src={AntooThumbnail}
            className="max-h-[50vh] rounded-xl shadow-lg"
          />
          <div className="x-4 flex-1 md:mx-12 md:my-8">
            <h2 className="mb-4 text-2xl font-bold">
              オリジナル3Dモデル『アントー』
              <span className="text-xs">¥1,000</span>
            </h2>
            <p>VRChatでの使用を想定したオリジナル3dモデルです。</p>
            <ul className="my-4 list-disc pl-6">
              <li>ポリゴン数 △29,668</li>
              <li>liltoonシェーダー使用</li>
              <li>
                VCC用unitypackageファイル、3dモデルblendファイル、
                <br />
                テクスチャpsdファイルあり
              </li>
              <li>
                マテリアルは　身体,衣装,メガネレンズの3種。
                <br />
                衣装は複数パターン、各マテリアルはmobile版も同梱
              </li>
              <li>両手14種（右手優先）で表情設定済み</li>
              <li>
                エクスプレッションメニューからの衣装の着脱対応
                <br />
                （excellent版でも利用可！）
              </li>
            </ul>
            <a
              href="https://sodie-oxige.booth.pm/items/7620978"
              className="text-blue-500 underline"
            >
              商品ページ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDimensional;
