var formtag=document.createElement("div");
formtag.setAttribute("class","head");
formtag.innerHTML=` <div class="form">
<label>First name: <input id="fname" type="text"></label>
<label>Last name: <input id="lname" type="text"></label>
<label>Address: <textarea id="address"></textarea></label>
<label>Pincode: <input id="pincode" type="number"></label>
<label>Food: <select id="food">
    <option value="Biryani">Biryani</option>
    <option value="Dosa">Dosa</option>
    <option value="Idle">Idle</option>
    <option value="Sambar">Sambar</option>
  </select></label>
<label>State: <input id="state" type="text"></label>
<label>Country: <input id="country" type="text"></label>
<span id="error"></span>
</div>
<input  class="submit" type="submit" onclick="submitvalues()">
<div id="tables">
<h2>Table Data</h2>
<table id="table">
    <thead>
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Food</th>
            <th>State</th>
            <th>Country</th>
        </tr>
    </thead>
</table>
</div>`;
document.body.append(formtag);


function submitvalues() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const food = document.getElementById('food').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const error = document.getElementById('error');
    error.innerHTML = (!fname || !lname || !address || !pincode || !food || !state || !country  ) ? 'All values are required' : '';
    if (fname && lname && address && pincode && food && state && country) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const fn = document.createElement('td');
        const ln = document.createElement('td');
        const add = document.createElement('td');
        const pin = document.createElement('td');
        const fo = document.createElement('td');
        const st = document.createElement('td');
        const co = document.createElement('td');
        fn.innerHTML = fname;
        ln.innerHTML = lname;
        add.innerHTML = address;
        pin.innerHTML = pincode;
        fo.innerHTML = food;
        st.innerHTML = state;
        co.innerHTML = country;
        trElement.appendChild(fn);
        trElement.appendChild(ln);
        trElement.appendChild(add);
        trElement.appendChild(pin);
        trElement.appendChild(fo);
        trElement.appendChild(st);
        trElement.appendChild(co);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}
