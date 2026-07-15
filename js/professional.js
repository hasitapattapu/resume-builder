/* ==========================================
   PROFESSIONAL RESUME BUILDER
========================================== */
/* ===========================
   INPUTS
=========================== */
const fullNameInput = document.getElementById("fullName");
const jobTitleInput = document.getElementById("jobTitle");
const summaryInput = document.getElementById("summary");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const locationInput = document.getElementById("location");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
/* ===========================
   PREVIEW
=========================== */
const previewName = document.getElementById("previewName");
const previewJob = document.getElementById("previewJob");
const previewSummary = document.getElementById("previewSummary");
const previewEmail = document.getElementById("professional-preview-email");
const previewPhone = document.getElementById("professional-preview-phone");
const previewLocation = document.getElementById("professional-preview-location");
const previewLinkedin = document.getElementById("professional-preview-linkedin");
const previewGithub = document.getElementById("professional-preview-github");
/* ===========================
   LIVE NAME
=========================== */
fullNameInput.addEventListener("input", function(){
    previewName.textContent =
        fullNameInput.value.trim() || "John Anderson";
});
/* ===========================
   LIVE JOB
=========================== */
jobTitleInput.addEventListener("input", function(){
    previewJob.textContent =
        jobTitleInput.value.trim() || "Software Engineer";
});
/* ===========================
   LIVE SUMMARY
=========================== */
summaryInput.addEventListener("input", function(){
    previewSummary.textContent =
        summaryInput.value.trim() ||
        "Your summary will appear here.";
});
/* ===========================
   LIVE EMAIL
=========================== */
emailInput.addEventListener("input", function(){
    previewEmail.textContent =
        emailInput.value.trim() ||
        "email@example.com";
});
/* ===========================
   LIVE PHONE
=========================== */
phoneInput.addEventListener("input", function(){
    previewPhone.textContent =
        phoneInput.value.trim() ||
        "+91 9876543210";
});
/* ===========================
   LIVE LOCATION
=========================== */
locationInput.addEventListener("input", function(){
    previewLocation.textContent =
        locationInput.value.trim() ||
        "Hyderabad";
});
/* ===========================
   LIVE LINKEDIN
=========================== */
linkedinInput.addEventListener("input", function(){
    previewLinkedin.textContent =
        linkedinInput.value.trim() ||
        "linkedin.com/in/john";
});
/* ===========================
   LIVE GITHUB
=========================== */
githubInput.addEventListener("input", function(){
    previewGithub.textContent =
        githubInput.value.trim() ||
        "github.com/john";
});
/* ==========================================
   EDUCATION
========================================== */
const educationContainer =
document.getElementById("educationContainer");
const educationPreview =
document.getElementById("professional-preview-education");
const addEducation =
document.getElementById("addEducation");
/* ===========================
   UPDATE EDUCATION PREVIEW
=========================== */
function updateEducation(){
    educationPreview.innerHTML = "";
    const cards =
    educationContainer.querySelectorAll(".education-card");
    cards.forEach(function(card){
        const degree =
        card.querySelector(".education-degree").value.trim();
        const university =
        card.querySelector(".education-university").value.trim();
        const cgpa =
        card.querySelector(".education-cgpa").value.trim();
        const start =
        card.querySelector(".education-start").value.trim();
        const end =
        card.querySelector(".education-end").value.trim();
        const item =
        document.createElement("div");
        item.className = "education-item";
        item.innerHTML = `
            <h3>${degree || "Degree"}</h3>
            <p>${university || "University"}</p>
            <span>
                ${cgpa ? "CGPA : " + cgpa : ""}
                ${(start || end)
                    ? " | " + start + " - " + end
                    : ""}
            </span>
        `;
        educationPreview.appendChild(item);
    });
}
/* ===========================
   ATTACH EVENTS
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
const firstCard =
educationContainer.querySelector(".education-card");
attachEducation(firstCard);
/* ===========================
   ADD EDUCATION
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
<label>University</label>
<input
type="text"
class="education-university"
placeholder="University">
<label>CGPA</label>
<input
type="text"
class="education-cgpa"
placeholder="8.9">
<label>Start Year</label>
<input
type="text"
class="education-start"
placeholder="2022">
<label>End Year</label>
<input
type="text"
class="education-end"
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
   EXPERIENCE
========================================== */
const experienceContainer =
document.getElementById("experienceContainer");
const experiencePreview =
document.getElementById("professional-preview-experience");
const addExperience =
document.getElementById("addExperience");
/* ===========================
   UPDATE EXPERIENCE PREVIEW
=========================== */
function updateExperience(){
    experiencePreview.innerHTML = "";
    const cards =
    experienceContainer.querySelectorAll(".experience-card");
    cards.forEach(function(card){
        const title =
        card.querySelector(".experience-title").value.trim();
        const company =
        card.querySelector(".experience-company").value.trim();
        const start =
        card.querySelector(".experience-start").value.trim();
        const end =
        card.querySelector(".experience-end").value.trim();
        const description =
        card.querySelector(".experience-description").value.trim();
        const item =
        document.createElement("div");
        item.className = "experience-item";
        item.innerHTML = `
            <h3>${title || "Job Title"}</h3>
            <p>${company || "Company"}</p>
            <span>
                ${(start || end)
                    ? start + " - " + end
                    : ""}
            </span>
            <p>
                ${description || "Experience description will appear here."}
            </p>
        `;
        experiencePreview.appendChild(item);
    });
}
/* ===========================
   ATTACH EVENTS
=========================== */
function attachExperience(card){
    const inputs =
    card.querySelectorAll("input, textarea");
    inputs.forEach(function(input){
        input.addEventListener(
            "input",
            updateExperience
        );
    });
    const remove =
    card.querySelector(".remove-btn");
    remove.addEventListener("click",function(){
        if(
            experienceContainer.querySelectorAll(".experience-card").length > 1
        ){
            card.remove();
        }
        else{
            inputs.forEach(function(input){
                input.value = "";
            });
        }
        updateExperience();
    });
}
/* ===========================
   FIRST CARD
=========================== */
const firstExperience =
experienceContainer.querySelector(".experience-card");
attachExperience(firstExperience);
/* ===========================
   ADD EXPERIENCE
=========================== */
addExperience.addEventListener("click",function(){
    const card =
    document.createElement("div");
    card.className =
    "editor-card experience-card";
    card.innerHTML = `
<label>Job Title</label>
<input
type="text"
class="experience-title"
placeholder="Software Engineer">
<label>Company</label>
<input
type="text"
class="experience-company"
placeholder="Google">
<label>Start Date</label>
<input
type="text"
class="experience-start"
placeholder="Jan 2025">
<label>End Date</label>
<input
type="text"
class="experience-end"
placeholder="Present">
<label>Description</label>
<textarea
rows="4"
class="experience-description"
placeholder="Describe your work..."></textarea>
<button
type="button"
class="remove-btn">
Remove Experience
</button>
`;
    experienceContainer.appendChild(card);
    attachExperience(card);
    updateExperience();
});
updateExperience();
/* ==========================================
   PROJECTS
========================================== */
const projectContainer =
document.getElementById("projectContainer");
const projectPreview =
document.getElementById("professional-preview-projects");
const addProject =
document.getElementById("addProject");
/* ===========================
   UPDATE PROJECT PREVIEW
=========================== */
function updateProject(){
    projectPreview.innerHTML = "";
    const cards =
    projectContainer.querySelectorAll(".project-card");
    cards.forEach(function(card){
        const name =
        card.querySelector(".project-name").value.trim();
        const link =
        card.querySelector(".project-link").value.trim();
        const tech =
        card.querySelector(".project-tech").value.trim();
        const description =
        card.querySelector(".project-description").value.trim();
        const item =
        document.createElement("div");
        item.className = "project-item";
        item.innerHTML = `
            <h3>
                ${name || "Project Name"}
            </h3>
            <p>
                ${tech || "Technologies Used"}
            </p>
            ${
                link
                ?
                `<a href="${link}" target="_blank">${link}</a>`
                :
                ""
            }
            <p>
                ${description || "Project description will appear here."}
            </p>
        `;
        projectPreview.appendChild(item);
    });
}
/* ===========================
   ATTACH EVENTS
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
const firstProject =
projectContainer.querySelector(".project-card");
attachProject(firstProject);
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
<label>Project Link</label>
<input
type="text"
class="project-link"
placeholder="https://github.com/...">
<label>Technologies Used</label>
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
document.getElementById("professional-preview-skills");
function updateSkills(){
    skillsPreview.innerHTML = "";
    const skills =
    skillsInput.value
    .split(",");
    skills.forEach(function(skill){
        const value =
        skill.trim();
        if(value !== ""){
            const chip =
            document.createElement("span");
            chip.className =
            "skill-chip";
            chip.textContent =
            value;
            skillsPreview.appendChild(chip);
        }
    });
}
skillsInput.addEventListener(
    "input",
    updateSkills
);
updateSkills();
/* ==========================================
   LANGUAGES
========================================== */
const languagesInput =
document.getElementById("languages");
const languagesPreview =
document.getElementById("professional-preview-languages");
function updateLanguages(){
    languagesPreview.innerHTML = "";
    const languages =
    languagesInput.value.split(",");
    languages.forEach(function(language){
        const value = language.trim();
        if(value !== ""){
            const chip =
            document.createElement("span");
            chip.className = "language-chip";
            chip.textContent = value;
            languagesPreview.appendChild(chip);
        }
    });
}
languagesInput.addEventListener(
    "input",
    updateLanguages
);
updateLanguages();
/* ==========================================
   CERTIFICATIONS
========================================== */
const certificationContainer =
document.getElementById("certificationContainer");
const certificationPreview =
document.getElementById("professional-preview-certifications");
const addCertification =
document.getElementById("addCertification");
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
        let link =
        card.querySelector(".certification-link").value.trim();
        if(
            link !== "" &&
            !link.startsWith("http://") &&
            !link.startsWith("https://")
        ){
            link = "https://" + link;
        }
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
            ${
                link
                ?
                `<p>
                    <a
                        href="${link}"
                        target="_blank"
                        rel="noopener noreferrer">
                        View Credential
                    </a>
                </p>`
                :
                ""
            }
        `;
        certificationPreview.appendChild(item);
    });
}
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
const firstCertification =
certificationContainer.querySelector(".certification-card");
attachCertification(firstCertification);
addCertification.addEventListener("click",function(){
    const card =
    document.createElement("div");
    card.className =
    "editor-card certification-card";
    card.innerHTML = `
<label>Certification Name</label>
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
<label>Credential Link (Optional)</label>
<input
type="text"
class="certification-link"
placeholder="https://...">
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
   PHOTO CROP
========================================== */
const cropModal =
document.getElementById("cropModal");
const cropImage =
document.getElementById("cropImage");
const cropApply =
document.getElementById("cropApply");
const cropCancel =
document.getElementById("cropCancel");
let cropper = null;
/* ===========================
   OPEN FILE PICKER
=========================== */
uploadPhoto.addEventListener("click",function(){
    photoInput.click();
});
/* ===========================
   LOAD IMAGE
=========================== */
photoInput.addEventListener("change",function(){
    const file =
    photoInput.files[0];
    if(!file){
        return;
    }
    const reader =
    new FileReader();
reader.onload = function(event){

    cropImage.src = event.target.result;

   cropModal.style.display = "flex";

cropImage.onload = function () {

    requestAnimationFrame(() => {

        if (cropper) {
            cropper.destroy();
        }

        cropper = new Cropper(cropImage,{
            aspectRatio:1,
            viewMode:1,
            autoCropArea:1
        });

    });

};
};
    reader.readAsDataURL(file);
});
/* ===========================
   APPLY CROP
=========================== */
cropApply.addEventListener("click",function(){
    if(!cropper){
        return;
    }
    const canvas =
    cropper.getCroppedCanvas({
        width:400,
        height:400
    });
    previewPhoto.src =
    canvas.toDataURL("image/png");
    previewPhoto.style.display =
    "block";
    photoText.style.display =
    "none";
    cropModal.style.display =
    "none";
    cropper.destroy();
    cropper = null;
});
/* ===========================
   CANCEL
=========================== */
cropCancel.addEventListener("click",function(){
    cropModal.style.display =
    "none";
    photoInput.value = "";
    if(cropper){
        cropper.destroy();
        cropper = null;
    }
});
/* ===========================
   REMOVE PHOTO
=========================== */
removePhoto.addEventListener("click",function(){
    previewPhoto.src = "";
    previewPhoto.style.display =
    "none";
    photoText.style.display =
    "flex";
    photoInput.value = "";
});
/* ==========================================
   DOWNLOAD PDF
========================================== */
const downloadPdf =
document.getElementById("downloadPdf");
downloadPdf.addEventListener(
    "click",
    async function(){
 /* ===========================
   CLONE RESUME
=========================== */
const originalPaper =
document.querySelector(".paper");
const clone =
originalPaper.cloneNode(true);
/* Remove .paper CSS */
clone.className = "";
clone.style.position =
"absolute";
clone.style.left =
"-99999px";
clone.style.top =
"0";
clone.style.width =
originalPaper.offsetWidth + "px";
clone.style.background =
"#FFFFFF";
clone.style.padding =
"60px";
clone.style.boxSizing =
"border-box";
clone.style.minHeight =
"0";
clone.style.maxHeight =
"none";
clone.style.height =
"auto";
clone.style.overflow = "visible";
clone.style.paddingBottom = "0";
clone.style.margin =
"0";
clone.style.boxShadow =
"none";
clone.style.borderRadius =
"0";
document.body.appendChild(
    clone
);
        /* ===========================
           REMOVE EMPTY SECTIONS
        ============================ */
        const blocks =
        clone.querySelectorAll(
            ".resume-block"
        );
        blocks.forEach(function(block){
            const previewArea =
            block.querySelector(
                "div,p"
            );
            if(!previewArea){
                return;
            }
            const text =
            previewArea.innerText
            .trim();
            const images =
            previewArea.querySelectorAll(
                "img"
            );
            if(
                text === "" &&
                images.length === 0
            ){
                block.remove();
            }
        });
        /* ===========================
           REMOVE EMPTY ITEMS
        ============================ */
        clone.querySelectorAll(
            ".education-item,.experience-item,.project-item,.certification-item"
        ).forEach(function(item){
            if(
                item.innerText
                .trim() === ""
            ){
                item.remove();
            }
        });
        /* ===========================
           REMOVE EMPTY CHIPS
        ============================ */
        clone.querySelectorAll(
            ".skill-chip,.language-chip"
        ).forEach(function(chip){
            if(
                chip.innerText
                .trim() === ""
            ){
                chip.remove();
            }
        });
        /* ===========================
           SHRINK TO CONTENT
        ============================ */
        clone.style.minHeight =
        "fit-content";
        clone.style.height =
        "auto";
        await document.fonts.ready;
        await new Promise(resolve=>setTimeout(resolve,100));
        /* ===========================
   RENDER TO CANVAS
=========================== */
const canvas =
await html2canvas(
    clone,
    {
        scale:2,
        useCORS:true,
        backgroundColor:"#FFFFFF",
        logging:false
    }
);
console.log("Canvas Height:", canvas.height);
console.log("Canvas Width :", canvas.width);
/* ===========================
   CREATE PDF
=========================== */
const { jsPDF } = window.jspdf;
const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4"
});
const pdfWidth =
pdf.internal.pageSize.getWidth();
const pdfHeight =
pdf.internal.pageSize.getHeight();
const canvasWidth =
canvas.width;
const canvasHeight =
canvas.height;
const ratio =
Math.min(
    pdfWidth / canvasWidth,
    pdfHeight / canvasHeight
);
const imgWidth =
canvasWidth * ratio;
const imgHeight =
canvasHeight * ratio;
/* ===========================
   CENTER CONTENT
=========================== */
const marginX =
(pdfWidth - imgWidth) / 2;
const marginY = 20;
/* ===========================
   SINGLE / MULTI PAGE
=========================== */
let renderedHeight = 0;
while(renderedHeight < canvasHeight){
    const pageCanvas =
    document.createElement("canvas");
    pageCanvas.width =
    canvasWidth;
    pageCanvas.height =
    Math.min(
        canvasHeight - renderedHeight,
        pdfHeight / ratio
    );
    const ctx =
    pageCanvas.getContext("2d");
    ctx.drawImage(
        canvas,
        0,
        renderedHeight,
        canvasWidth,
        pageCanvas.height,
        0,
        0,
        canvasWidth,
        pageCanvas.height
    );
    const pageImage =
    pageCanvas.toDataURL("image/png");
    if(renderedHeight > 0){
        pdf.addPage();
    }
    pdf.addImage(
        pageImage,
        "PNG",
        marginX,
        marginY,
        imgWidth,
        pageCanvas.height * ratio
    );
    renderedHeight +=
    pageCanvas.height;
}
/* ===========================
   SAVE PDF
=========================== */
pdf.save(
    "Professional_Resume.pdf"
);
clone.remove();
    }
);

const lastBlock = clone.querySelector(".resume-block:last-child");

if(lastBlock){

    lastBlock.style.marginBottom = "0";

}