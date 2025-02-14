const studentFullName = 'Arun Katagoni';
const studentNumber = 1198025;
console.log(`${studentFullName} ~ ${studentNumber}`);
const headerContent = document.querySelector('h1') ;
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
headerContent.classList.add(headingPrimary);
