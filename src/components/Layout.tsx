import Banner from "./Banner";
import Footer from "./Footer"
import Header from "./Header"

type props = React.PropsWithChildren<object>;

export default function Layout({ children }: props) {
    return (
        <div className="dark:bg-gray-500 dark:text-white">
            <Header />
            <Banner />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
