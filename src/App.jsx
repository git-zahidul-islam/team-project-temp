import Banner from "./banner/Banner";
import Card from "./card/Card";
import Details from "./details/Details";


function App() {

  return(
    <div>
      <Banner/>
      <div className="bg-[#F5F5F5]">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 md:p-5 p-2 md:w-[85%] w-full mx-auto">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      </div>
      <div className="my-10">
        <Details/>
      </div>
    </div>
  )
}

export default App;
