$(document).ready(function () {
  var examId = localStorage.getItem("examRelationId");
  var studentId = localStorage.getItem("userId");
  var token = localStorage.getItem("token");
  var answersApiUrl = `http://pixelstamp-007-site3.htempurl.com/api/v3/Exam/Answers?ExamId=${examId}&StudentId=${studentId}`;
  var url = "http://pixelstamp-007-site3.htempurl.com";

  $.ajax({
    url: answersApiUrl,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    success: function (response) {
      if (response.isSuccess) {
        var examDetails = response.data;
        $("#examDetails").html(`
                    <h4>Exam Name: ${examDetails.examName}</h4>
                    <p>Exam Degree: ${examDetails.examDegree}</p>
                    <p>Student Degree: ${examDetails.studentDegree}</p>
                    <p>Entry Date: ${new Date(
                      examDetails.enteryDate
                    ).toLocaleDateString()}</p>
                `);

        var answersContainer = $("#answersContainer");
        answersContainer.empty();

        if (examDetails.answers.length > 0) {
          examDetails.answers.forEach(function (answer) {
            var answerRow = `
                            <div class="answer-row">
                                <h5>Question: ${answer.question}</h5>
                                ${
                                  answer.image
                                    ? `<img src="${url}${answer.image}" class="img-fluid" alt="Question Image">`
                                    : ""
                                }
                                <p>Correct Answer: <span class="correct-answer">${
                                  answer.questionAnswer
                                }</span></p>
                                <p>Student's Answer: <span class="${
                                  answer.isCorrected
                                    ? "correct-answer"
                                    : "wrong-answer"
                                }">${answer.studentAnswer}</span></p>
                                <p>Student's Degree: ${answer.studentDegree}</p>
                                ${
                                  answer.comment
                                    ? `<p>Comment: ${answer.comment}</p>`
                                    : ""
                                }
                            </div>
                            <hr>
                        `;
            answersContainer.append(answerRow);
          });
        } else {
          answersContainer.html("<p>No answers available for this exam.</p>");
        }
      } else {
        $("#examDetails").html("<p>Error fetching exam details.</p>");
      }
    },
    error: function (error) {
      console.error("Error fetching exam answers:", error);
      $("#examDetails").html("<p>Error fetching exam details.</p>");
    },
  });
});
