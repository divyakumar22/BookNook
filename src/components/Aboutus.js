import React from 'react'

export default function Aboutus() {
  return (
    <div style={{backgroundColor:'#FCF9D9'}}>
        <h1><center><b>--ABOUT US--</b></center></h1>
<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ABOUT BOOKNOOK
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={{backgroundColor:'#fff5ee'}}>
      Welcome to our online book selling and exchanging marketplace! Here, book lovers like you come together to explore a world of literary treasures. Whether you're looking to buy, sell, or exchange books, our platform offers a vibrant community and a seamless browsing experience.

Discover a vast collection of books spanning various genres, from timeless classics to contemporary bestsellers. With user-friendly search tools and personalized recommendations, finding your next captivating read is a breeze. Our marketplace connects you with passionate book enthusiasts eager to share their literary journeys.

Sell your pre-loved books and give them a new life in the hands of fellow readers. Clear your shelves and make room for new adventures while earning some extra cash. Or, if you're looking to expand your personal library, exchange books with other members and embark on exciting reading exchanges.

Our platform fosters connections among book lovers, enabling you to engage in discussions, share reviews, and connect with like-minded individuals. Immerse yourself in a community where book recommendations, literary insights, and conversations flourish.

Join our online book selling and exchanging marketplace today and dive into a world where the magic of books knows no bounds. Let your reading journey take flight, as you explore, connect, and indulge in the joy of discovering new stories. Happy reading!
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          ABOUT DEVELOPERS
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={{backgroundColor:'#fff5ee'}}>
      Meet our talented team of developers who bring innovation and expertise to every project. With a passion for coding and a commitment to delivering exceptional results, our developers are at the heart of our success.
      Our developers are lifelong learners, continuously seeking to expand their knowledge and stay updated with the latest technologies. They actively participate in workshops, conferences, and online communities, sharing their insights and staying ahead of industry trends. Their commitment to growth and improvement translates into cutting-edge solutions for our clients.
      Don't just take our word for it. Our clients have praised our developers for their exceptional skills, professionalism, and ability to deliver results on time and within budget. Here's what some of our satisfied clients have to say about working with our development team.
      Our core Developers are :<br/> 1. Divya Kumar Regmi  ---frontend expert<br/>
                                2. Diwash Gauli       ---backend expert<br/>
                                3. Deepak Awasthi     ---frontend+backend expert
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          CONTACT INFORMATION
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={{backgroundColor:'#fff5ee'}}>
      Company Name:BookNook<br/>
Address: 1234 Fictional Street, Imaginary City, Fakesville<br/>
Phone: +1 (555) 123-4567<br/>
Email: info@techcorpsolutions.com
      </div>
    </div>
  </div>
</div>
<br/><br/>
<h2><i><u><center>send us feedback! we appreciate !</center></u></i></h2>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write us here...</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<center>

<button type='Submit'>SUBMIT MY FEEDBACK</button>
</center>


    </div>
  )
}
