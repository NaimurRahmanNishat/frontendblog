import newsLetterImg from "../../assets/news-letter.png";

const NewsLetter = () => {
  return (
    <div className="my-16 bg-cover bg-center bg-no-repeat rounded-md" style={{backgroundImage:`url(${newsLetterImg})`}}>
        <div className="py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center">
            <div className="space-y-3 p-4">
                <h2 className="text-2xl font-bold text-white">Sign up for our newsletter</h2>
                <p className="text-lg text-white">Get the latest news, updates, and offers straight to your inbox</p>
                <button className="bg-white hover:bg-secondery hover:text-white text-primary font-bold py-2 px-8 rounded-full">Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;