import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Roberto Castro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam."
      />
      <Post
        author="Manuela Ferreira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriDSAAMDsosam."
      />


    </div>
  )
}
