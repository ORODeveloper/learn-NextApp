// app/components/LanguageSwitcher.js
export default function LanguageSwitcher({ changeLanguage }) {
    return (
      <div>
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue="en">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          {/* <option value="ur">Urdu</option> */}
        </select>
      </div>
    );
  }
  