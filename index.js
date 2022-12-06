
//education

function AddEducation() {
    count = 1;
    count += 1;
    let education = document.querySelector(".eduction");
    education.innerHTML += `${count}. <label for="cname" class="form-label" style="margin-top : 10%"> College/School Name</label>
    <input type="text" name="cname" id="cname" class="form-control">
    <label for="dname" class="form-label mt-3">Division</label>
    <input type="text" name="dname" id="dname" class="form-control">
    <label for="mark" class="form-label mt-3">Mark</label>
    <input type="number" name="mark" id="mark" class="form-control">
    <label for="year" class="form-label mt-3">Year Of Pass Out</label>
    <input type="date" name="year" id="year" class="form-control">`
}

//experience

function AddExpereince() {
    count = 1;
    count += 1;
    let experience = document.querySelector(".experience");
    experience.innerHTML += `${count}. <label for="kname" class="form-label" style="margin-top : 10%">Company Name</label>
    <input type="text" name="kname" id="kname" class="form-control">
    <label for="dsname" class="form-label mt-3">Designation</label>
    <input type="text" name="dsname" id="dsname" class="form-control">
    <label for="fdtae" class="form-label mt-3">From</label>
    <input type="date" name="fdate" id="fdate" class="form-control">
    <label for="Tdate" class="form-label mt-3">To</label>
    <input type="date" name="Tdate" id="Tdate" class="form-control">`
}

//to see next page

function nextPage(e) {
    if (screen.width >= 769) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    e.preventDefault();
    let btn = document.querySelector(".nextPageBtn");
    let div = document.querySelector(".nextPage");
    div.style.display = "block";
    btn.style.display = "none";
}

let form1data = []
//cv-template start here

//setting profile image

function submitted(e) {
    e.preventDefault();
    let file = document.querySelector("#pimage").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    //set the image to template

    reader.onloadend = function () {
        document.querySelector(".myimage").src = reader.result;
    };

      //form1 submitted

      let input1 = document.querySelectorAll("#form1 input");
      input1.forEach((e) => {
          form1data.push(e.value)
      })
      let address = document.querySelector("#address");
      form1data.splice(3,0,address);
      



      //form1 deatails adding to template

      let p1 = document.querySelectorAll("#form1-name p");
      let a1 = document.querySelectorAll(".form1-link")
      p1[0].innerHTML = form1data[1].toUpperCase();
      p1[1].innerHTML = form1data[2];
      p1[2].innerHTML = form1data[3].value;
      p1[2].classList.add("text-capitalize")
      a1[0].setAttribute("href",form1data[4])
      a1[1].setAttribute("href",form1data[5])
      a1[2].setAttribute("href",form1data[6])


      //form2 submitted
      let exp = document.querySelectorAll(".experience input");
      let card = document.querySelectorAll(".card-body p");
      let edu = document.querySelectorAll(".eduction input");
      let skills = document.querySelector("#skill");
      let hobby = document.querySelector("#hobby");
      skills.classList.add("text-capitalize");



      //addind form2 to tepmlate 
      document.querySelector(".cv-template h1").innerHTML = form1data[1].toUpperCase();
      card[0].innerHTML = `${exp[0].value.toUpperCase()} <br/>${exp[1].value.toUpperCase()} <br/> ${exp[2].value} <br/> ${exp[3].value} <br/><br/>
      ${exp[4].value.toUpperCase()} <br/>${exp[5].value.toUpperCase()} <br/>${exp[6].value} <br/>${exp[7].value}<br/><br/>
      `
      card[1].innerHTML = `${edu[0].value.toUpperCase()} <br/>${edu[1].value.toUpperCase()} <br/>${edu[2].value} <br/>${edu[3].value}<br/><br/>
      ${edu[4].value.toUpperCase()} <br/>${edu[5].value.toUpperCase()} <br/>${edu[6].value} <br/>${edu[7].value}<br/><br/>
      `
      card[2].innerHTML = skills.value;
      card[3].innerHTML = hobby.value;

      let first_sec = document.querySelector("#first-sec");
      let template = document.querySelector("#cv-template");
      first_sec.style.display = "none";
      template.style.display = "block"
      window.scrollTo({top:0,left:0,behavior:"smooth"})

}










