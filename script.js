/*Variables*/
let projImg1 = document.getElementById('project-1');
let projImg2 = document.getElementById('project-2');
let projImg3 = document.getElementById('project-3');

let projPara1 = document.getElementById('paragraph-1');
let projPara2 = document.getElementById('paragraph-2');
let projPara3 = document.getElementById('paragraph-3');

/*Hidden elements*/
projImg1.hidden = true;
projImg2.hidden = true;
projImg3.hidden = true;

projPara1.hidden = true;
projPara2.hidden = true;
projPara3.hidden = true;

/*Event handlers to show the project when clicked*/
function toggleProject(img, para){
    let hiddenImage = img.hidden;
    let hiddenParagraph = para.hidden;

    if(hiddenImage && hiddenParagraph){
        img.hidden = false;
        para.hidden = false;
    }
    else if(!(hiddenImage && hiddenParagraph)){
        img.hidden = true;
        para.hidden = true;
    }
}

