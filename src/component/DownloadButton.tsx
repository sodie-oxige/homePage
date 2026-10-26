import Button from "./Button";
import { useEffect, useState } from "react";

interface Asset {
  id: number;
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
}

interface Release {
  assets: Asset[];
}

interface DownloadButtonProps extends React.ComponentProps<"button"> {
  owner: string;
  repo: string;
  tag: string;
}

function DownloadButton({ owner, repo, tag, ...props }: DownloadButtonProps) {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`,
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.status}`);
      }

      const release: Release = await response.json();
      setAssets(release.assets);
    };

    load().catch((error) => {
      if (error.name !== "AbortError") console.error(error);
    });

    return () => controller.abort();
  }, [owner, repo, tag]);

  return (
    <div>
      {assets.map((asset) => (
        <Button
          key={asset.id}
          {...props}
          onClick={(e) => {
            window.open(asset.browser_download_url, "_blank");
            e.preventDefault();
          }}
          className="flex items-center gap-2"
        >
          {asset.name}
          <span className="rounded bg-white px-2 text-black">
            {asset.download_count}
          </span>
        </Button>
      ))}
    </div>
  );
}

export default DownloadButton;
