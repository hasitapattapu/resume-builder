/* ==========================================
   MODERN RESUME BUILDER
========================================== */

/* ===========================
   INPUTS
=========================== */

const fullNameInput =
document.getElementById("fullName");

const jobTitleInput =
document.getElementById("jobTitle");

const emailInput =
document.getElementById("email");

const phoneInput =
document.getElementById("phone");

const locationInput =
document.getElementById("location");

const linkedinInput =
document.getElementById("linkedin");

const githubInput =
document.getElementById("github");

const summaryInput =
document.getElementById("summary");


/* ===========================
   PREVIEW
=========================== */

const previewName =
document.getElementById("previewName");

const previewJob =
document.getElementById("previewJob");

const previewEmail =
document.getElementById("previewEmail");

const previewPhone =
document.getElementById("previewPhone");

const previewLocation =
document.getElementById("previewLocation");

const previewLinkedin =
document.getElementById("previewLinkedin");

const previewGithub =
document.getElementById("previewGithub");

const previewSummary =
document.getElementById("previewSummary");


/* ===========================
   NAME
=========================== */

fullNameInput.addEventListener("input",function(){

    previewName.textContent =
    fullNameInput.value.trim() ||
    "John Anderson";

});


/* ===========================
   JOB
=========================== */

jobTitleInput.addEventListener("input",function(){

    previewJob.textContent =
    jobTitleInput.value.trim() ||
    "Software Engineer";

});


/* ===========================
   EMAIL
=========================== */

emailInput.addEventListener("input",function(){

    previewEmail.textContent =
    emailInput.value.trim() ||
    "email@example.com";

});


/* ===========================
   PHONE
=========================== */

phoneInput.addEventListener("input",function(){

    previewPhone.textContent =
    phoneInput.value.trim() ||
    "+91 9876543210";

});


/* ===========================
   LOCATION
=========================== */

locationInput.addEventListener("input",function(){

    previewLocation.textContent =
    locationInput.value.trim() ||
    "Hyderabad";

});


/* ===========================
   LINKEDIN
=========================== */

linkedinInput.addEventListener("input",function(){

    previewLinkedin.textContent =
    linkedinInput.value.trim() ||
    "linkedin.com/in/john";

});


/* ===========================
   GITHUB
=========================== */

githubInput.addEventListener("input",function(){

    previewGithub.textContent =
    githubInput.value.trim() ||
    "github.com/john";

});


/* ===========================
   SUMMARY
=========================== */

summaryInput.addEventListener("input",function(){

    previewSummary.textContent =
    summaryInput.value.trim() ||
    "Your professional summary will appear here.";

});

/* ==========================================
   EDUCATION
========================================== */

const educationContainer =
document.getElementById("educationContainer");

const educationPreview =
document.getElementById("previewEducation");

const addEducation =
document.getElementById("addEducation");


/* ===========================
   UPDATE
=========================== */

function updateEducation(){

    educationPreview.innerHTML = "";

    const cards =
    educationContainer.querySelectorAll(".education-card");

    cards.forEach(function(card){

        const degree =
        card.querySelector(".education-degree").value.trim();

        const college =
        card.querySelector(".education-college").value.trim();

        const cgpa =
        card.querySelector(".education-cgpa").value.trim();

        const year =
        card.querySelector(".education-year").value.trim();

        const item =
        document.createElement("div");

        item.className =
        "education-item";

        item.innerHTML = `

            <h3>

                ${degree || "Degree"}

            </h3>

            <p>

                ${college || "College"}

            </p>

            <span>

                ${cgpa ? "CGPA : " + cgpa : ""}

                ${year ? " | " + year : ""}

            </span>

        `;

        educationPreview.appendChild(item);

    });

}


/* ===========================
   EVENTS
=========================== */

function attachEducation(card){

    const inputs =
    card.querySelectorAll("input");

    inputs.forEach(function(input){

        input.addEventListener(

            "input",

            updateEducation

        );

    });

    const remove =
    card.querySelector(".remove-btn");

    remove.addEventListener("click",function(){

        if(

            educationContainer.querySelectorAll(".education-card").length > 1

        ){

            card.remove();

        }

        else{

            inputs.forEach(function(input){

                input.value = "";

            });

        }

        updateEducation();

    });

}


/* ===========================
   FIRST CARD
=========================== */

attachEducation(

    educationContainer.querySelector(".education-card")

);


/* ===========================
   ADD
=========================== */

addEducation.addEventListener("click",function(){

    const card =
    document.createElement("div");

    card.className =
    "editor-card education-card";

    card.innerHTML = `

<label>Degree</label>

<input
type="text"
class="education-degree"
placeholder="B.Tech Computer Science">

<label>College</label>

<input
type="text"
class="education-college"
placeholder="University">

<label>CGPA</label>

<input
type="text"
class="education-cgpa"
placeholder="8.9">

<label>Year</label>

<input
type="text"
class="education-year"
placeholder="2026">

<button
type="button"
class="remove-btn">

Remove Education

</button>

`;

    educationContainer.appendChild(card);

    attachEducation(card);

    updateEducation();

});


updateEducation();

/* ==========================================
   PROJECTS
========================================== */

const projectContainer =
document.getElementById("projectContainer");

const projectPreview =
document.getElementById("modern-preview-projects");

const addProject =
document.getElementById("addProject");


/* ===========================
   UPDATE PROJECTS
=========================== */

function updateProject(){

    projectPreview.innerHTML = "";

    const cards =
    projectContainer.querySelectorAll(".project-card");

    cards.forEach(function(card){

        const name =
        card.querySelector(".project-name").value.trim();

        const tech =
        card.querySelector(".project-tech").value.trim();

        const description =
        card.querySelector(".project-description").value.trim();

        const item =
        document.createElement("div");

        item.className =
        "project-item";

        item.innerHTML = `

            <h3>

                ${name || "Project Name"}

            </h3>

            <p>

                <strong>Technology:</strong>

                ${tech || "Technology"}

            </p>

            <p>

                ${description || "Project description."}

            </p>

        `;

        projectPreview.appendChild(item);

    });

}


/* ===========================
   EVENTS
=========================== */

function attachProject(card){

    const inputs =
    card.querySelectorAll("input, textarea");

    inputs.forEach(function(input){

        input.addEventListener(

            "input",

            updateProject

        );

    });

    const remove =
    card.querySelector(".remove-btn");

    remove.addEventListener("click",function(){

        if(

            projectContainer.querySelectorAll(".project-card").length > 1

        ){

            card.remove();

        }

        else{

            inputs.forEach(function(input){

                input.value = "";

            });

        }

        updateProject();

    });

}


/* ===========================
   FIRST CARD
=========================== */

attachProject(

    projectContainer.querySelector(".project-card")

);


/* ===========================
   ADD PROJECT
=========================== */

addProject.addEventListener("click",function(){

    const card =
    document.createElement("div");

    card.className =
    "editor-card project-card";

    card.innerHTML = `

<label>Project Name</label>

<input
type="text"
class="project-name"
placeholder="Resume Builder">

<label>Technology</label>

<input
type="text"
class="project-tech"
placeholder="HTML, CSS, JavaScript">

<label>Description</label>

<textarea
rows="4"
class="project-description"
placeholder="Describe your project..."></textarea>

<button
type="button"
class="remove-btn">

Remove Project

</button>

`;

    projectContainer.appendChild(card);

    attachProject(card);

    updateProject();

});


updateProject();

/* ==========================================
   SKILLS
========================================== */

const skillsInput =
document.getElementById("skills");

const skillsPreview =
document.getElementById("modern-preview-skills");


/* ===========================
   UPDATE SKILLS
=========================== */

function updateSkills(){

    skillsPreview.innerHTML = "";

    const skills =
    skillsInput.value.split(",");

    skills.forEach(function(skill){

        const value =
        skill.trim();

        if(value === ""){

            return;

        }

        const chip =
        document.createElement("span");

        chip.className =
        "skill-chip";

        chip.textContent =
        value;

        skillsPreview.appendChild(chip);

    });

}


/* ===========================
   EVENTS
=========================== */

skillsInput.addEventListener(

    "input",

    updateSkills

);


updateSkills();

/* ==========================================
   CERTIFICATIONS
========================================== */

const certificationContainer =
document.getElementById("certificationContainer");

const certificationPreview =
document.getElementById("modern-preview-certifications");

const addCertification =
document.getElementById("addCertification");


/* ===========================
   UPDATE CERTIFICATIONS
=========================== */

function updateCertification(){

    certificationPreview.innerHTML = "";

    const cards =
    certificationContainer.querySelectorAll(".certification-card");

    cards.forEach(function(card){

        const name =
        card.querySelector(".certification-name").value.trim();

        const organization =
        card.querySelector(".certification-organization").value.trim();

        const year =
        card.querySelector(".certification-year").value.trim();

        const item =
        document.createElement("div");

        item.className =
        "certification-item";

        item.innerHTML = `

            <h3>

                ${name || "Certification"}

            </h3>

            <p>

                ${organization || "Organization"}

            </p>

            <span>

                ${year || ""}

            </span>

        `;

        certificationPreview.appendChild(item);

    });

}


/* ===========================
   ATTACH EVENTS
=========================== */

function attachCertification(card){

    const inputs =
    card.querySelectorAll("input");

    inputs.forEach(function(input){

        input.addEventListener(

            "input",

            updateCertification

        );

    });

    const remove =
    card.querySelector(".remove-btn");

    remove.addEventListener("click",function(){

        if(

            certificationContainer.querySelectorAll(".certification-card").length > 1

        ){

            card.remove();

        }

        else{

            inputs.forEach(function(input){

                input.value = "";

            });

        }

        updateCertification();

    });

}


/* ===========================
   FIRST CARD
=========================== */

attachCertification(

    certificationContainer.querySelector(".certification-card")

);


/* ===========================
   ADD CERTIFICATION
=========================== */

addCertification.addEventListener("click",function(){

    const card =
    document.createElement("div");

    card.className =
    "editor-card certification-card";

    card.innerHTML = `

<label>Certification</label>

<input
type="text"
class="certification-name"
placeholder="Google Data Analytics">

<label>Organization</label>

<input
type="text"
class="certification-organization"
placeholder="Coursera">

<label>Year</label>

<input
type="text"
class="certification-year"
placeholder="2025">

<button
type="button"
class="remove-btn">

Remove Certification

</button>

`;

    certificationContainer.appendChild(card);

    attachCertification(card);

    updateCertification();

});


updateCertification();


/* ==========================================
   DOWNLOAD PDF
========================================== */

const downloadPdf =
document.getElementById("downloadPdf");

downloadPdf.addEventListener(

    "click",

    async function(){

        const paper =
        document.querySelector(".paper");

        const canvas =
        await html2canvas(

            paper,

            {

                scale:2,

                useCORS:true,

                backgroundColor:"#FFFFFF"

            }

        );

        const { jsPDF } =
        window.jspdf;

        const pdf =
        new jsPDF(

            "p",

            "mm",

            "a4"

        );

        const pageWidth =
        210;

        const pageHeight =
        297;

        const imgWidth =
        pageWidth;

        const imgHeight =
        canvas.height *
        imgWidth /
        canvas.width;

/* ===========================
   FIT TO SINGLE PAGE
=========================== */

const ratio =
Math.min(

    pageWidth / canvas.width,

    pageHeight / canvas.height

);

const finalWidth =
canvas.width * ratio;

const finalHeight =
canvas.height * ratio;

const marginX =
(pageWidth - finalWidth) / 2;

const marginY =
(pageHeight - finalHeight) / 2;

pdf.addImage(

    canvas,

    "PNG",

    marginX,

    marginY,

    finalWidth,

    finalHeight

);
        pdf.save(

            "Modern_Resume.pdf"

        );

    }

);