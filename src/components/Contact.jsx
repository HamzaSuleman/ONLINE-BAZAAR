import React from 'react'

const SendMessage = () =>
{
    if(document.getElementById('fullname').value === '' ||
    document.getElementById('email-contact').value === '' ||
    document.getElementById('text-area').value === '' ) 
    {
        alert('some fields might not filled..')
    }

    else{
    const element = document.createElement('a');
    const file = new Blob([
        ['\n Feedback Customer:'],
        ['\n -------------------\n'],
        ['\n Full Name: '+document.getElementById('fullname').value],
        ['\n Email: '+document.getElementById('email-contact').value],
        ['\n Message: '+document.getElementById('text-area').value],
    ],
    {type:"text/plain;charset-utf-8"});

    element.href = URL.createObjectURL(file);
    element.download = 'FeedBack.txt';
    document.body.appendChild(element);
    element.click();

    alert('Contacted Successfully...')

    document.getElementById('fullname').value  = '' ;
    document.getElementById('email-contact').value  = '' ;
    document.getElementById('text-area').value  = '' ;
    }
}

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="fullname" placeholder="Hamza Suleman"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email-contact" placeholder="name@example.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message </label>
                                    <textarea class="form-control" id="text-area" rows="5"></textarea>
                                </div>
                                <button type="button" class="btn btn-outline-primary" onClick={SendMessage}>Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}
            export default Contact
