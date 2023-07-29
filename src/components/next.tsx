// -------- i18next

import React from "react";
import { useTranslation } from "react-i18next";

const Next = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("cn")}>中文</button>
      <h2>{t("hello")}</h2>
      <p>{t("welcome")}</p>
    </div>
  );
}

export default Next;
