function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(sec => {
        sec.style.display = sec.id === sectionId && sec.style.display !== 'block' ? 'block' : 'none';
    });
}

// Cerrar sección al hacer clic fuera
document.addEventListener('click', (e) => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.style.display === 'block' && !section.contains(e.target) && !e.target.closest('.nav-btn')) {
            section.style.display = 'none';
        }
    });
});
