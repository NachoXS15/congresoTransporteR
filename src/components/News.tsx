import { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import Loader from './ui/Loader'
import NewsCard from './ui/NewsCard'
import { NewsProps } from '../config/types'
import Titulo from './ui/Titulo'

export default function News() {
    const [news, setNews] = useState<NewsProps[]>([])

    const db = getFirestore();
    const fetchData = async () => {
        try {
            const response = await getDocs(collection(db, 'news'));
            const dataList = response.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as NewsProps[];
            setNews(dataList);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section id="Noticias" className="w-full mx-auto px-5 py-8 sm:container min-h-32">
            <Titulo text="Novedades" color='white' />
            <div id="noticias-cards" className="flex flex-wrap">
                {
                    news && news.length > 0 ? (
                        news.map((noticia) => (
                            <NewsCard title={noticia.title} desc={noticia.desc} />
                        ))
                    ) : (
                        <Loader />
                    )
                }

                <a href="/" className="btn inline-block mx-auto">Mas noticias</a>
            </div>
        </section>
    )
}
