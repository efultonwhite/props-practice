
import './App.css';
import Blog from './Blog';
import Header from './components/Header';

function App() {
  let paragraph1 = "There are dozens and dozens of apple types, some of which you likely see in your produce section often, and some you may not have heard of or ever seen. Depending on the apple variety and how bitter or sweet it is, you may want to use them in pies and baked goods or to complement a savory sauce or another dish. But beyond flavor, they can also add color and texture.";
  let paragraph2 = "Seeing a bear in the wild is a special treat for any visitor to a national park. While it is an exciting moment, it is important to remember that bears in national parks are wild and can be dangerous. Their behavior is sometimes unpredictable. Although rare, attacks on humans have occurred, inflicting serious injuries and death. Each bear and each experience is unique; there is no single strategy that will work in all situations and that guarantees safety. Most bear encounters end without injury. Following some basic guidelines may help to lessen the threat of danger. Your safety can depend on your ability to calm the bear.";
  let paragraph3 = "Full-grown caterpillar of the Black Swallowtail (other names: Eastern Black Swallowtail, American Swallowtail, Parsnip Swallowtail, Parsley Caterpillar, Celeryworm, and Caraway worm)";
  let paragraphs = [paragraph1, paragraph2, paragraph3];
  let blogPosts = [
    {
      title: "Apples Are Falling From the Sky!",
      p: paragraph1
    },
    {
      title: "Bears Are Going Bezerk",
      p: paragraph2
    },
    {
      title: "Catapillars Are Making Friends with Local Cats",
      p: paragraph3
    }

  ];
  let blogTitles = ["Apples Are Falling From the Sky!", "Bears Are Going Bezerk", "Catapillars Are Making Friends with Local Cats"];
  return (
    <div className="app">
      <Header/>
      <div className="props">

      {blogPosts.map((posts) => {
        console.log(posts);
        return <Blog title={posts.title} description={posts.p}/>
      })}
      {/* {paragraphs.map((paragraph) => {
        return <Blog description={paragraph}/>
      })} */}
      </div>
    </div>
  );
}

export default App;
