import Header from "@/components/Header/Header";
import Legends from "@/components/Legends/Legends";
import Trending from "@/components/Trending/Trending";

export default function Home() {
    return (
        <main className="">
            <Header />
            <Trending />
            <Legends />
        </main>
    );
}
