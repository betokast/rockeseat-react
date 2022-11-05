import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1557562645-4eee56b29bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=20"
            />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/37387009?v=4" />
                <strong>Roberto Castro</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}