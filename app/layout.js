
"use client"
import { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

// Create a context to provide translations to child components
export const LanguageContext = createContext();

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('en');  // Default language is English
  const [translations, setTranslations] = useState({});

  // Load language JSON dynamically
  useEffect(() => {
    const loadLanguage = async (lang) => {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    };

    loadLanguage(language);
  }, [language]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);  // Change language based on user selection
  };

  return (
    <>
      <html lang={language} className={isDark ? 'dark' : 'light'}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Portfolio</title>
        </head>
        <body>
          <Header changeLanguage={changeLanguage} />
          <button onClick={toggleTheme}>Toggle Theme</button>
          {/* Provide translations to children using context */}
          <LanguageContext.Provider value={translations}>
            <main>
              {children}  
            </main>
          </LanguageContext.Provider>
          <Footer />
        </body>
      </html>
    </>
  );
}
