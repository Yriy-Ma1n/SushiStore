import Recomendations from "../Recomendation/RecomendationTovars";
import style from "./Home-page.module.css"

export default function HomePage() {

    return <>
        <main className={style.main}>
            <div className={style.baner}>
                <div className={style.banerContent}>
                    <img src="https://png.pngtree.com/background/20230425/original/pngtree-plate-of-sushi-with-black-background-picture-image_2470831.jpg" alt="baner-sushi" />
                    <h1>Fresh Sushi Delivered to Your Door</h1>
                </div>
            </div>
            <Recomendations/>
        </main>
    </>
}
