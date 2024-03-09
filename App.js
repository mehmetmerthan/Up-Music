import React from "react";
import RootRouter from "./Src/Router/RootRouter";
import { I18nextProvider } from "react-i18next";
import i18n from "./Constants/Languages/i18n";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RootRouter />
    </I18nextProvider>
  );
}
