import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {TranslationContextProvider} from "./translations/translations"
import { UserProvider } from './components/UserContext';


ReactDOM.render(<TranslationContextProvider><UserProvider><App /></UserProvider></TranslationContextProvider>, document.getElementById('root'));