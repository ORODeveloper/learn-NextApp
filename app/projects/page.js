// app/projects/page.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div>
      <Header />
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project 1</h2>
          <p>A description of your first project.</p>
          <a href="#">View Project</a>
        </li>
        <li>
          <h2>Project 2</h2>
          <p>A description of your second project.</p>
          <a href="#">View Project</a>
        </li>
      </ul>
      <Footer />
    </div>
  );
}
