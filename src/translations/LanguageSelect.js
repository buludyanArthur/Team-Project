import React, { useContext } from "react";

import { TranslationContext } from './translations';

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
    <select onChange={onLanguageSelect} defaultValue={'DEFAULT'}>
      {renderOption("en")}
      {renderOption("ru")}
    </select>
  );
};

export default LanguageSelect;