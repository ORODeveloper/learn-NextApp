// app/components/Header.js
"use client";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ changeLanguage }) {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* <li><a href="/projects">Projects</a></li> */}
        </ul>
      </nav>
      <LanguageSwitcher changeLanguage={changeLanguage} />
    </header>
  );
}
