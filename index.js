
calculatiorBtn = () => {
    const dateField = document.querySelector("#date-field").value;
    const monthField = document.querySelector("#month-field").value;
    const yearField = document.querySelector("#year-field").value;

    let date = new Date();
    let d1 = date.getDate();
    let m1 = 1 + date.getMonth();
    let y1 = date.getFullYear();
    let month = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];

    if (dateField > d1) {
        d1 = d1 + month[m1 - 1];
        m1 = m1 - 1
    }
    if (monthField > m1) {
        m1 = m1 + 12;
        y1 = y1 - 1;
    }
    const currentDate = d1 - dateField;
    const currentmonth = m1 - monthField;
    const currentYear = y1 - yearField;
    document.querySelector('#current-age').innerHTML = `your age is ${currentYear} year ${currentmonth} month ${currentDate} day`

}