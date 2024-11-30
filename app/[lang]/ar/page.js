// app/[lang]/ar/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ArabicPage() {
  return (
    <div style={{ direction: 'rtl' }}>
      <Header />
      <h1>مرحبًا بكم في محفظتي - النسخة العربية</h1>
      <p>هذه هي النسخة العربية من موقع محفظتي.</p>
      <Footer />
    </div>
  );
}
