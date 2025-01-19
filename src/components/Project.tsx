import { GITHUB_AUTH_TOKEN } from "astro:env/server";
import type { Repository } from "../types/repository";

type Props = {
  repo: Repository;
};

async function getRepoReadme(repoOwner: string, repo: string): Promise<string> {
  try {
    const token = GITHUB_AUTH_TOKEN;

    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repo}/readme`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    const readme = await response.json();

    if (!readme.content) {
      return "";
    }

    const decodedReadme = Buffer.from(readme.content, "base64").toString(
      "utf-8"
    );
    console.log("Readme", decodedReadme);
    return decodedReadme;
  } catch (error) {
    console.error("Error:", error);
    return JSON.stringify(error);
  }
}

const Project = async ({ repo }: Props) => {
  //   console.log("repo", repo);
  const readme = await getRepoReadme(repo.owner.login, repo.name);

  return (
    <div className="flex flex-col">
      <div>
        <h4>{repo.name}</h4>
        <p>{repo.language}</p>
        <p>{readme}</p>
      </div>
    </div>
  );
};

export default Project;
