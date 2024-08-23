import serverUrls from "./server-url.js";
import apiUrls from "./api.js";

$(document).ready(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();

    var formData = {
      phoneNumber: $('input[name="phoneNumber"]').val(),
      password: $('input[name="password"]').val(),
    };
    $.ajax({
      url: serverUrls.server + apiUrls.login, // Pointing to your proxy server
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        $("#response").html("<p>Login successful!</p>");
        window.location.href = "home-2.html";
      },
      error: function (error) {
        $("#response").html(`<p> ${error.responseJSON.message} </p>`);
      },
    });
  });
});
