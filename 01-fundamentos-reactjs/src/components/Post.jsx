import { format, formatDistanceToNow } from 'date-fns'
import ptBr  from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt }){

    // Maneira de formatar a data vis js
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-br', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt)

    //Maneira de formatar a data utilizando a biblioteca date-fsn:
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
        locale: ptBr
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale:ptBr,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime="2022-10-09 09:32 ">
                    { publishedDateRelativeNow }
                </time>
            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}