import React, { useContext } from "react";

import { TranslationContext } from './translations';

import "../styles/translations.css"

const LanguageSelect = props => {
  const { langCode, dispatch } = useContext(TranslationContext);

  const onLanguageSelect = e =>
    dispatch({ type: "setLanguage", payload: e.target.value });
  
  const renderOption = code => (
    <option value={code} selected={code === langCode} defaultValue={'DEFAULT'}>
      {code}
    </option>
  );
  
  return (
    <select className = "lang-dropdown-content"  onChange={onLanguageSelect} defaultValue={'DEFAULT'}>
      {renderOption("En")}
      {renderOption("Հայ")}

    </select>
  );
};

export default LanguageSelect;