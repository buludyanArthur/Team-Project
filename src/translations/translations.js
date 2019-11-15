import React, {useReducer} from 'react';

import EN from '../locale/en.json';
import ARM from '../locale/arm.json';

const translations = {
    En: EN,
    Հայ: ARM,
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
    langCode: "En",
    translate: getTranslate("En"),
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

