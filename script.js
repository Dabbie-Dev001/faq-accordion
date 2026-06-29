const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        answer.classList.toggle("active");

        if(answer.classList.contains("active")){
            icon.textContent = "−";
        }else{
            icon.textContent = "+";
        }
    });

    question.addEventListener("keydown", (e) => {
        if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            question.click();
        }
    });
});
