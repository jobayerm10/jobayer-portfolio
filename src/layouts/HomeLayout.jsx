import Header from "../components/Header";
import DeveloperVibes from "../components/DeveloperVibes";
import LeftAside from "../components/HomeLayouts/LeftAside";
import RightAside from "../components/HomeLayouts/RightAside";
import Main from "../components/HomeLayouts/Main";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-3 grid grid-cols-12 min-h-screen">
        <aside className="col-span-1 h-full">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-10">
          <Main></Main>
        </section>
        <aside className="col-span-1 h-full bg-accent ">
          <RightAside></RightAside>
        </aside>
      </main>

      {/* <footer>
        <section className="w-11/12 mx-auto my-3">
          <DeveloperVibes></DeveloperVibes>
        </section>
      </footer> */}
    </div>
  );
};

export default HomeLayout;
