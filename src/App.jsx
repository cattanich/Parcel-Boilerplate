function App() {
  return (
    <main id="main" className="container">
      <section id="home">
        <div className="row pt-20">
          <div className="col-md-12 text-center">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="JQuery Works :)"
            >
              Hola mundo :)
            </a>
            <p className="pt-5">
              Este proyecto usa
              <span>
                <a
                  href="https://parceljs.org/"
                  target="_blank"
                  rel="noopener"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Visit"
                >
                  Parcel
                </a>
              </span>
              que compila scss y js.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
