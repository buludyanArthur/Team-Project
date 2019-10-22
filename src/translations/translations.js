import React, {useReducer} from 'react';

import EN from '../locale/en.json';
import RU from '../locale/ru.json';

const translations = {
    en: EN,
    ru: RU,
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
    langCode: "ru",
    translate: getTranslate("ru"),
};

export const TranslationContext = React.createContext(initialState);

export const TranslationContextProvider = ({ children }) => {

  const reducer = (state, action) => {
      switch (action.type) {
        case "setLanguage":
          return {
            langCode: action.payload,
            translate: getTranslate(action.payload),
          };
        default:
          return { ...initialState };
      }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <TranslationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TranslationContext.Provider>
  );  
};

