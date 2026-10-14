const reviewId = "wakala";

document.querySelectorAll(".user-others-interaction button").forEach((button) => {
    const reaction = button.dataset.reaction;
    const storageKey = `musicolic:review:${reviewId}:${reaction}`;
    const interaction = JSON.parse(localStorage.getItem(storageKey) || '{"count":0,"voted":false}');
    const count = button.parentElement.querySelector(".interaction-count");

    count.textContent = String(interaction.count);
    button.setAttribute("aria-pressed", String(interaction.voted));

    button.addEventListener("click", () => {
        interaction.voted = !interaction.voted;
        interaction.count += interaction.voted ? 1 : -1;
        localStorage.setItem(storageKey, JSON.stringify(interaction));
        count.textContent = String(interaction.count);
        button.setAttribute("aria-pressed", String(interaction.voted));
    });
});
