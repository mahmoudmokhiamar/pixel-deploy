/*---------- register ----------*/

$(document).ready(function () {
  var registrationToken; // To store the token after successful registration
  var studentId; // To store the student ID after successful registration

  // Function to handle registration form submission
  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();

    var formData = {
      ParentPhone: $("#parentPhone").val(),
      Governorate: $("#governorate").val(),
      City: $("#city").val(),
      School: $("#school").val(),
      Name: $("#name").val(),
      PhoneNumber: $("#phoneNumber").val(),
      Password: $("#password").val(),
    };

    $.ajax({
      url: "http://pixelstamp-007-site3.htempurl.com/api/v3/identity/RegisterStudent",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (response) {
        console.log("Registration Success:", response);
        $("#response").html(
          "<p>تم تسجيل بنجاح برجاء اختيار المرحلة التعليمية و الشعبة</p>"
        );

        // Store the token and studentId for later use
        registrationToken = response.data.token;
        studentId = response.data.userId;

        console.log("Token received:", registrationToken); // Debugging line
        console.log("Student ID received:", studentId); // Debugging line

        // Hide the registration form and show the grade selection form
        $("#registrationForm").hide();
        $("#gradeForm").show();

        // Fetch stages and grades
        fetchStages();
      },
      error: function (error) {
        console.log("Registration Error:", error);
        $("#response").html(
          `<p style="color:red">${error.responseJSON.message}</p>`
        );
        // Ensure the grade form is hidden in case of an error
        $("#gradeForm").hide();
      },
    });
  });

  // Function to fetch stages and populate the grades dropdown
  function fetchStages() {
    console.log("Fetching stages with token:", registrationToken); // Debugging line
    $.ajax({
      url: "http://pixelstamp-007-site3.htempurl.com/api/v3/Stage/Stages",
      method: "GET",
      headers: {
        Authorization: "Bearer " + registrationToken, // Pass the stored token as Authorization header
      },
      success: function (response) {
        console.log("Stages fetched successfully:", response); // Debugging line
        // Check if response is already parsed or needs to be parsed
        let responseData;
        try {
          responseData =
            typeof response === "string" ? JSON.parse(response) : response;
        } catch (e) {
          console.error("Error parsing response:", e);
          alert("Error parsing stages and grades.");
          return;
        }
        console.log("Parsed response data:", responseData); // Debugging line

        if (responseData.isSuccess) {
          const stages = responseData.data;
          const gradesDropdown = $("#grades");
          gradesDropdown.empty(); // Clear previous options
          stages.forEach((stage) => {
            stage.grades.forEach((grade) => {
              const optionText = `${stage.stageName} - ${grade.gradeName}`;
              gradesDropdown.append(new Option(optionText, grade.gradeId));
            });
          });
        } else {
          alert(responseData.messageEnglish);
        }
      },
      error: function (error) {
        console.log("Error fetching stages:", error);
        alert("Error fetching stages and grades.");
      },
    });
  }

  // Function to handle grade selection form submission
  $("#gradeForm").on("submit", function (event) {
    event.preventDefault();

    var gradeData = {
      studentId: studentId, // Use the stored studentId
      gradeId: $("#grades").val(), // Capture the selected gradeId
    };

    console.log("Submitting grade change with token:", registrationToken); // Debugging line
    $.ajax({
      url: "http://pixelstamp-007-site3.htempurl.com/api/v3/Stage/ChangeGrade",
      type: "POST",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + registrationToken, // Pass the stored token as Authorization header
      },
      data: JSON.stringify(gradeData),
      success: function (response) {
        console.log("Grade Change Success:", response);
        $("#response").html("<p>Grade change successful!</p>");

        // Hide the grade form and show the pending message
        $("#gradeForm").hide();
        $("#pendingMessage").show();
      },
      error: function (error) {
        console.log("Grade Change Error:", error);
        if (error.status === 401) {
          $("#response").html(
            "<p>Unauthorized. Please check your credentials.</p>"
          );
        } else {
          $("#response").html(
            "<p>Error in grade change. Please try again.</p>"
          );
        }
      },
    });
  });

  // Initially hide the grade selection form and the pending message
  $("#gradeForm").hide();
  $("#pendingMessage").hide();
});
