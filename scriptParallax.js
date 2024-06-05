
function handleMouseMove(e) {
    document.querySelectorAll('.caption').forEach(function (textElement) {
        const rect = textElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const angleX = deltaY * 0.05;
        const angleY = deltaX * -0.05;
        const translateZ = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * -0.1;
        textElement.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(${translateZ}px)`;
    });
}

document.addEventListener('mousemove', handleMouseMove);

function resetTransform() {
    document.querySelectorAll('.caption').forEach(function (textElement) {
        textElement.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
}

document.querySelectorAll('.caption').forEach(function (textElement) {
    textElement.addEventListener('mouseleave', resetTransform);
});
window.addEventListener('mouseout', resetTransform);