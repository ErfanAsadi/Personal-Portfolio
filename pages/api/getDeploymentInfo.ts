// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface DeploymentInfo {
  title: string;
  footerHref: string;
  socialMediaHandlers: {
    [key: string]: string;
  };
}

export const depConfig = {
  title: "default title",
  footerHref: "https://vegaris.com",
  socialMediaHandlers: {
    instagram: "test",
  },
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<DeploymentInfo>
): void => {
  res.status(200).json(depConfig);
};

export default handler;
