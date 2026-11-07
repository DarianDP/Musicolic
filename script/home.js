document.querySelectorAll(".user-others-interaction button").forEach((button) => {
    const reviewId = button.closest(".reviews-rules").dataset.reviewId;
    const reaction = button.dataset.reaction;
    const storageKey = `musicolic:review:${reviewId}:${reaction}`;
    const interaction = JSON.parse(localStorage.getItem(storageKey) || '{"count":0,"voted":false}');
    const count = button.parentElement.querySelector(".interaction-count");

    if (count) {
        count.textContent = String(interaction.count);
    }
    button.setAttribute("aria-pressed", String(interaction.voted));

    button.addEventListener("click", () => {
        interaction.voted = !interaction.voted;
        interaction.count += interaction.voted ? 1 : -1;
        localStorage.setItem(storageKey, JSON.stringify(interaction));
        if (count) {
            count.textContent = String(interaction.count);
        }
        button.setAttribute("aria-pressed", String(interaction.voted));
    });
});

const musicMenuButton = document.querySelector(".musiquitapa");
const musicOptions = document.querySelector(".music-options");

if (musicMenuButton && musicOptions) {
    const setMusicOptionsVisible = (visible) => {
        musicMenuButton.setAttribute("aria-expanded", String(visible));
        musicOptions.hidden = !visible;
    };

    musicMenuButton.addEventListener("click", () => {
        setMusicOptionsVisible(musicOptions.hidden);
    });

    document.addEventListener("click", (event) => {
        if (!musicMenuButton.contains(event.target) && !musicOptions.contains(event.target)) {
            setMusicOptionsVisible(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMusicOptionsVisible(false);
        }
    });
}
