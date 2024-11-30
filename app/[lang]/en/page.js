// app/[lang]/en/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EnglishPage() {
  return (
    <div>
      <Header />
      <h1>Welcome to my Site - English Version</h1>
      <p>This is the English version of website.</p>
      <Footer />
    </div>
  );
}
