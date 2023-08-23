
$(document).ready(() => {
    $('.del').click(() => {
        if (!confirm("Are you sure you want to delete this blogpost?")) {
            return false;
        }
    })
});