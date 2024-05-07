const Settings = () => {

  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-yellow-700 ml-5 mt-4 text-center underline">Settings</h1>
      <section className="eye-comfort text-center text-yellow-700 mt-6">
        <p className="inline text-lg">Toggle eye-comfort mode: </p><button type="button" className="bg-yellow-500 hover:bg-yellow-700 text-white transition-all duration-500 font-bold px-2 py-1 rounded-full">eye-comfort on/off</button>
      </section>
      <section className=""></section>
    </div>
  )
}

export default Settings
