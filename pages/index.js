import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web-Curriculum Gustavo Gazzeta</title>
        <meta name="description" content="Todos os meus trabalhos contidos aqui." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gustavo Segato Gazzeta
        </h1>

        <p className={styles.description}>
          Analista de Desenvolvimento Jr.
        </p>

        <Link href="/tecnologias" className={styles.description}>
          Minhas Tecnologias preferidas.
        </Link>

        <div className={styles.grid}>
          <a href="https://github.com/ggazzeta" className={styles.card}>
            <h2>Projetos &rarr;</h2>
            <p>Encontre aqui os meus projetos no GitHub.</p>
          </a>

          <a href="https://www.ggazzeta.com/api/tarefas" className={styles.card}>
            <h2>API &rarr;</h2>
            <p>Segue a rota para as minhas APIs 😜</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
