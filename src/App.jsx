const App = () => {
    return (

        <>
            <div className="bg-[url('./assets/images/Recurso1.png')] bg-cover bg-no-repeat bg-white-100 min-h-screen" >
                <header className="">

                    <div className="flex justify-center gap-20 justify-items-center px-20 py-4">
                        <div>
                            <button className="grow text-gray-200 text-sm">
                                Home
                            </button>
                        </div>
                        <div>
                            <button className="grow text-gray-200 text-sm">
                                About
                            </button>
                        </div>
                        <div>
                            <button className="grow text-gray-200 text-sm">
                                Catalogue
                            </button>
                        </div>
                        <div>
                            <button className="grow text-gray-200 text-sm">
                                Promo
                            </button>
                        </div>
                        <div>
                            <button className="grow text-gray-200 text-sm">
                                Contact
                            </button></div>


                    </div>
                </header>
                <main>
                    <div className="py-40">
                        <h1 className=" text-6xl text-center font-semibold text-white">Fashion</h1>
                        <br />
                        <h2 className=" text-6xl  text-center font-semibold text-white">Trending</h2>
                        <p className="text-4xl text-center font-semibold text-white py-3">Special Offer</p>
                        <p className="text-4xl text-center font-semibold text-white ">Only For You</p>
                    </div>
                </main>

            </div>
        </>

    )
}
export default App;