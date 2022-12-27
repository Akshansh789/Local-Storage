function test() {
    //Retriving data//
    var uid = document.getElementById("username").Value;
    var pw = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Storing Data//
    var user = localStorage.setItem("uid" , uid);
    var pass = localStorage.setItem("pw", pw);
    var em = localStorage.setItem("email", email);


}