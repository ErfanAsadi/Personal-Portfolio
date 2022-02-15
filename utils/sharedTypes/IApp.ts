/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { NextPage } from "next";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPage;
}

export interface AppPage {
  _nextI18Next?: any;
  pageTransitionProps: any;
  deploymentConfigs: any;
}

export enum PageName {
  Home = "home",
  Sample = "sample",
}
