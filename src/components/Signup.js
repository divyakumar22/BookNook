import React from 'react'

export default function Signup() {
  return (
    <>
    <h2><b><center>---SIGN UP HERE FIRST---</center></b> </h2>
  
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor:'hsl(0, 0%, 96%)'}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br/>
            <span className="text-primary">for your desired book</span>
          </h1>
          <p style={{color:'hsl(217, 10%, 50.8%)'}}>
          Welcome to our online book selling and exchanging marketplace! Here, book lovers like you come together to explore a world of literary treasures. Whether you're looking to buy, sell, or exchange books, our platform offers a vibrant community and a seamless browsing experience.
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" /><br/>
                  <label className="form-check-label" for="form2Example33">
                   <br/> Subscribe to our newsletter
                  </label>
                </div>

                
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>

  )
}
