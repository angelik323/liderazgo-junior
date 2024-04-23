// JavaScript para gestionar la exclusividad de las opciones en cada fila y columna
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const row = this.dataset.row;
        const group = this.dataset.group;

        checkboxes.forEach(otherCheckbox => {
            if (
                otherCheckbox !== this &&
                (
                    (
                        otherCheckbox.dataset.row === row &&
                        otherCheckbox.dataset.group === group
                    ) ||
                    (
                        otherCheckbox.closest('td').cellIndex === this.closest('td').cellIndex &&
                        otherCheckbox.dataset.row === row &&
                        otherCheckbox.dataset.group === group
                    )
                )
            ) {
                otherCheckbox.checked = false;
            }
        });
    });
});