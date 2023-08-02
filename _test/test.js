const techRadar = document.querySelector(".quadrant-wrapper");

function createBlip(x, y) {
    const blip = document.createElement("div");
    blip.className = "blip";
    blip.style.left = `${x}px`;
    blip.style.top = `${y}px`;

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerHTML = "POTATO LAng";
    blip.appendChild(tooltip);
    techRadar.appendChild(blip);
}

createBlip(200, 70);
