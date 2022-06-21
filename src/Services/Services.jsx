function Services(){
    return(
       <main className="container">
         <div className="p-4 p-md-5 text-white rounded bg-info my-3">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">We Give you nice job with higher Qualite</h1>
                <p className="lead my-3">
                Multiple lines of text that form the lede, 
                informing new readers quickly and efficiently 
                about what s most interesting in this posts contents.
                </p>
                <p className="lead mb-0">
                  <span className="text-white fw-bold">Continue reading...</span>
                </p>
            </div>
         </div>
         <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <span className="stretched-link">Continue reading</span>
        </div>
        
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <span className="stretched-link">Continue reading...</span>
        </div>
       
      </div>
    </div>
  </div>
       </main>
    )
}
export default Services;