import React from 'react'
import { useSelector } from 'react-redux'

const demoData = () =>
{
    document.getElementById('firstName').value = 'Hamza' ;
    document.getElementById('lastName').value = 'Suleman'; 
    document.getElementById('UserName-Checkout').value = 'HamzaSuleman'; 
    document.getElementById('Email-Checkout').value = 'Se19-114@ssuet.edu.pk'; 
    document.getElementById('address').value = 'C/226 Block 9 Gulshan Iqbal'; 
    document.getElementById('country').value = 'Pakistan'; 
    document.getElementById('city').value = 'Karachi'; 
    document.getElementById('zip').value = '75300'; 
}

function getCookieValues()
{
    console.log(document.cookie);

    var username = getCookie("User-Name");
    var email = getCookie("Email");

    console.log(username)

    document.getElementById("Email-Checkout").value = email;
    document.getElementById("UserName-Checkout").value = username;

    alert('Auto-Fill Complete...')
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    var printItem = '';
    var iteration = 0;
    const itemList = (item) => {
        printItem+= `\n ${++iteration}. title: ${item.title} \n    qunatity: ${item.qty}\n    price: ${Math.round(item.price)*100}`;
        total = total + (item.qty * Math.round(item.price) * 100);

        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">{item.qty} x {Math.round(item.price) * 100}</span>
            </li>
        );
    }

    const PlaceOrder = () =>
{

    if(document.getElementById('firstName').value === '' ||
    document.getElementById('lastName').value === '' ||
    document.getElementById('UserName-Checkout').value === '' ||
    document.getElementById('Email-Checkout').value === '' ||
    document.getElementById('address').value === '' ||
    document.getElementById('country').value === '' ||
    document.getElementById('city').value === '' ||
    document.getElementById('zip').value === '' ||
    total === 0 ||
    document.getElementById('cash').checked === false) 
    {
        alert('some fields might not filled..')
    }
    else{
    const element = document.createElement('a');
    const file = new Blob([
        ['\n ONLINE BAZAAR Billing Recipt:'],
        ['\n ------------------------------'],
        [`\n ID: ${Math.floor(Math.random() * 100) +1}`],
        ['\n First Name: '+document.getElementById('firstName').value],
        ['\n Last Name: '+document.getElementById('lastName').value],
        ['\n Username: '+document.getElementById('UserName-Checkout').value],
        ['\n Email: '+document.getElementById('Email-Checkout').value],
        ['\n Address: '+document.getElementById('address').value],
        ['\n Country: '+document.getElementById('country').value],
        ['\n City: '+document.getElementById('city').value],
        ['\n Postal Code: '+document.getElementById('zip').value],
        ['\n Payment-Method: Cash'],
        [`\n ----------------------\n Item List: ${printItem} \n ----------------------`],
        [`\n Payment: PKR ${total}`],
    ],
    {type:"text/plain;charset-utf-8"});

    element.href = URL.createObjectURL(file);
    element.download = 'Order Recipt.txt';
    document.body.appendChild(element);
    element.click();

    alert('Order Successfully Placed..')

    document.getElementById('firstName').value = '' ;
    document.getElementById('lastName').value = ''; 
    document.getElementById('UserName-Checkout').value = ''; 
    document.getElementById('Email-Checkout').value = ''; 
    document.getElementById('address').value = ''; 
    document.getElementById('country').value = ''; 
    document.getElementById('city').value = ''; 
    document.getElementById('zip').value = ''; 
    }
}

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (PKR)</span>
                                <strong>PKR {total}</strong>
                                
                            </li>
                        </ul>

                        <form className="list-group">
                            <div >
                                
                            </div>
                            <br/>
                            <div >
                                <button id='automatic' type="button" onClick={getCookieValues} 
                                className="btn btn-secondary">Automatic Fill</button>
                            </div><br/>
                        </form>
                        <form className="list-group">
                            <div >
                                <button id='demo' type="button" onClick={demoData} 
                                className="btn btn-secondary">Demo Data Fill</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" validate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="UserName-Checkout" placeholder="Username" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="Email-Checkout" placeholder="you@example.com" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main Street" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>Pakistan</option>
                                        
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">City</label>
                                    <select className="form-select" id="city" required>
                                        <option value="">Choose...</option>
                                        <option>Karachi</option>
                                        <option>Lahore</option>
                                        <option>Hyderabad</option>
                                        <option>Islamabad</option>
                                        <option>Peshawar</option>
                                        <option>Rawalpindi</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="cash" name="paymentMethod" type="checkbox" className="form-check-input"  required />
                                    <label className="form-check-label" htmlFor="cash">Cash On Delivery</label>
                                </div>
                           </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" onClick={PlaceOrder} type="button">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout

